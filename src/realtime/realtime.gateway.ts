import { Logger, OnModuleDestroy } from '@nestjs/common';
import { Role } from '../../generated/prisma/client';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import Redis from 'ioredis';
import { Namespace, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { RedisService } from '../redis/redis.service';
import { createAdapter } from '@socket.io/redis-adapter';
import {
  ORDER_STATUS_CHANGED_CHANNEL,
  orderStatusChangedEvent,
} from '../orders/order-events';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Gauge } from 'prom-client';

interface HandshakeUser {
  userId: string;
  role: Role;
  branchId: string | null;
}

type ConnectedSocket = Socket<any, any, any, { user?: HandshakeUser }>;

@WebSocketGateway({ namespace: '/realtime', cors: { origin: '*' } })
export class RealtimeGateway
  implements
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnModuleDestroy
{
  private readonly logger = new Logger(RealtimeGateway.name);
  private subscriber: Redis;

  @WebSocketServer()
  server: Namespace;

  constructor(
    private readonly jwt: JwtService,
    private readonly redis: RedisService,
    @InjectMetric('realtime_socket_connections')
    private readonly connections: Gauge<string>,
  ) {}

  async afterInit(namespace: Namespace) {
    // NestJS wires this into an RxJS subscription (see @nestjs/websockets'
    // WebSocketsController), not an awaited promise — an unhandled rejection
    // in here (e.g. Redis unreachable at boot) crashes the whole process
    // instead of just failing this gateway. Everything that can reject stays
    // inside this try/catch so a Redis outage degrades the realtime layer
    // (no cross-instance broadcast until it's back) instead of taking the
    // whole app down with it.
    try {
      // NestJS injects the /realtime Namespace here, not the root Server —
      // the adapter has to be set on the root (namespace.server) or
      // .adapter() doesn't exist.
      const pubClient = this.redis.duplicate();
      const subClient = this.redis.duplicate();
      namespace.server.adapter(createAdapter(pubClient, subClient));

      this.subscriber = this.redis.duplicate();
      await this.subscriber.subscribe(ORDER_STATUS_CHANGED_CHANNEL);
      this.subscriber.on('message', (channel, message) => {
        if (channel !== ORDER_STATUS_CHANGED_CHANNEL) return;
        this.broadcastStatusChange(
          JSON.parse(message) as orderStatusChangedEvent,
        );
      });

      this.logger.log('Realtime gateway ready (Redis adapter attached)');
    } catch (err) {
      this.logger.error(
        'Realtime gateway failed to attach the Redis adapter — realtime updates will not cross instances until Redis is reachable',
        err as Error,
      );
    }
  }

  async handleConnection(client: ConnectedSocket) {
    const user = await this.authenticate(client);
    if (!user) {
      client.disconnect(true);
      return;
    }

    client.data.user = user;
    this.connections.inc();
    await client.join(`customer:${user.userId}`);
    if (user.role !== Role.CUSTOMER && user.branchId) {
      await client.join(`branch:${user.branchId}:staff`);
    }
  }

  handleDisconnect() {
    this.connections.dec();
  }

  async onModuleDestroy() {
    await this.subscriber?.quit();
  }

  private broadcastStatusChange(event: orderStatusChangedEvent) {
    this.server
      .to(`customer:${event.customerId}`)
      .emit(ORDER_STATUS_CHANGED_CHANNEL, event);
    this.server
      .to(`branch:${event.branchId}:staff`)
      .emit(ORDER_STATUS_CHANGED_CHANNEL, event);
  }

  private async authenticate(
    client: ConnectedSocket,
  ): Promise<HandshakeUser | null> {
    const token =
      (client.handshake.auth?.token as string | undefined) ??
      client.handshake.headers.authorization?.replace('Bearer ', '');
    if (!token) return null;

    try {
      const payload = await this.jwt.verifyAsync<{
        sub: string;
        role: Role;
        branchId: string | null;
      }>(token, { secret: process.env.JWT_ACCESS_SECRET });
      return {
        userId: payload.sub,
        role: payload.role,
        branchId: payload.branchId,
      };
    } catch {
      return null;
    }
  }
}

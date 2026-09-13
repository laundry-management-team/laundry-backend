import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, of, tap } from 'rxjs';
import { RedisService } from '../redis/redis.service';

// Long enough to cover realistic client retry windows (a mobile client
// retrying after a dropped connection, a proxy timeout, etc).
const IDEMPOTENCY_TTL_SECONDS = 24 * 60 * 60;

interface RequestWithUser {
  headers: Record<string, string | string[] | undefined>;
  user?: { userId: string };
  method: string;
  originalUrl: string;
}

@Injectable()
export class IdempotencyInterceptor implements NestInterceptor {
  constructor(private readonly redis: RedisService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<unknown>> {
    const req = context.switchToHttp().getRequest<RequestWithUser>();
    const idempotencyKey = req.headers['idempotency-key'];
    if (!idempotencyKey || typeof idempotencyKey !== 'string') {
      return next.handle();
    }

    const cacheKey = `idempotency:${req.user?.userId}:${req.method}:${req.originalUrl}:${idempotencyKey}`;
    const cached = await this.redis.get(cacheKey);
    if (cached) {
      return of(JSON.parse(cached));
    }

    return next.handle().pipe(
      tap((response) => {
        void this.redis.set(
          cacheKey,
          JSON.stringify(response),
          'EX',
          IDEMPOTENCY_TTL_SECONDS,
        );
      }),
    );
  }
}

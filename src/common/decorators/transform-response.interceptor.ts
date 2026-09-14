import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request, Response } from 'express';
import { map, Observable } from 'rxjs';
import { INFRA_ROUTE_PREFIXES } from '../constants/infra-routes.constant';
import { RESPONSE_MESSAGE_KEY } from './response-message.decorator';
import { ApiSuccessResponse } from '../interfaces/api-response.interface';
import { I18nContext } from 'nestjs-i18n';
import { DateConverter } from '../helper/date-converter.helper';
import { PaginatedResult } from '../interfaces/paginated-result.interface';

function isPaginatedResult(value: unknown): value is PaginatedResult<unknown> {
  return (
    !!value &&
    typeof value === 'object' &&
    Array.isArray((value as PaginatedResult<unknown>).data) &&
    typeof (value as PaginatedResult<unknown>).meta === 'object'
  );
}

@Injectable()
export class TransformResponseInterceptor implements NestInterceptor<
  unknown,
  unknown
> {
  constructor(private readonly reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const req = context.switchToHttp().getRequest<Request>();
    if (INFRA_ROUTE_PREFIXES.some((p) => req.url?.startsWith(p))) {
      return next.handle();
    }

    const messageKey =
      this.reflector.getAllAndOverride<string>(RESPONSE_MESSAGE_KEY, [
        context.getHandler(),
        context.getClass(),
      ]) ?? 'common.SUCCESS';

    return next.handle().pipe(
      map((data): ApiSuccessResponse => {
        const res = context.switchToHttp().getResponse<Response>();
        const i18n = I18nContext.current(context);
        const paginated = isPaginatedResult(data);
        return {
          success: true,
          statusCode: res.statusCode,
          data: paginated ? data.data : (data ?? null),
          ...(paginated ? { meta: data.meta } : {}),
          message: i18n?.t(messageKey) ?? messageKey,
          timestamp: DateConverter.formatToVientianeString(),
        };
      }),
    );
  }
}

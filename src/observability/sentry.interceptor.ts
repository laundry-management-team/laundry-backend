import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable, throwError } from 'rxjs';
import * as Sentry from '@sentry/node';

@Injectable()
export class SentryInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      catchError((error: unknown) => {
        const status = (error as { status?: number })?.status;
        if (!status || status >= 500) {
          const req = context.switchToHttp().getRequest<{
            user?: { userId: string };
          }>();
          Sentry.withScope((scope) => {
            if (req?.user?.userId) scope.setUser({ id: req.user.userId });
            Sentry.captureException(error);
          });
        }
        return throwError(() => error);
      }),
    );
  }
}

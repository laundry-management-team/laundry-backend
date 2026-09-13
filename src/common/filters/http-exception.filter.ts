import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { I18nContext } from 'nestjs-i18n';
import { ApiErrorResponse } from '../interfaces/api-response.interface';
import { DateConverter } from '../helper/date-converter.helper';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    const i18n = I18nContext.current(host);

    const isHttpException = exception instanceof HttpException;
    const status = isHttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    let message: string;
    let errors: string[] | undefined;

    if (isHttpException) {
      const body = exception.getResponse();
      const rawMessage =
        typeof body === 'string'
          ? body
          : (body as { message?: unknown }).message;

      if (Array.isArray(rawMessage)) {
        message = i18n?.t('common.VALIDATION_ERROR') ?? 'Validation failed';
        errors = rawMessage as string[];
      } else if (typeof rawMessage === 'string') {
        message = i18n?.t(rawMessage as never) ?? rawMessage;
      } else {
        message = exception.message;
      }
    } else {
      message = i18n?.t('common.INTERNAL_ERROR') ?? 'Internal server error';
      this.logger.error(
        `Unhandled exception on ${req.method} ${req.url}`,
        exception instanceof Error ? exception.stack : exception,
      );
    }

    const payload: ApiErrorResponse = {
      success: false,
      statusCode: status,
      data: null,
      message,
      ...(errors ? { errors } : {}),
      timestamp: DateConverter.formatToVientianeString(),
    };

    res.status(status).json(payload);
  }
}

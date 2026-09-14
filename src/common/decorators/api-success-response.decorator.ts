import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

interface ApiSuccessResponseOptions {
  status?: number;
  description?: string;
  example?: unknown;
  meta?: unknown;
}

export const ApiSuccessResponseExample = (
  options: ApiSuccessResponseOptions = {},
) => {
  const status = options.status ?? 200;
  return applyDecorators(
    ApiResponse({
      status,
      description: options.description,
      schema: {
        example: {
          success: true,
          statusCode: status,
          data: options.example ?? null,
          ...(options.meta ? { meta: options.meta } : {}),
          message: 'Success',
          timestamp: '2026-09-14T10:00:00+07:00',
        },
      },
    }),
  );
};

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger, ValidationPipe } from '@nestjs/common';
import { initSentry } from './observability/sentry';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  initSentry();
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({ json: process.env.NODE_ENV === 'production' }),
  });
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  app.use(helmet());

  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('Laundry API')
      .setDescription('API documentation for the Laundry backend')
      .setVersion('1.0')
      .addBearerAuth()
      .addGlobalParameters({
        name: 'Accept-Language',
        in: 'header',
        required: false,
        description: 'Response language (lo, en, zh, th)',
        schema: {
          type: 'string',
          enum: ['en', 'lo', 'zh', 'th'],
          default: 'en',
        },
      })
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document, {
      customSiteTitle: 'Laundry API Docs',
      swaggerOptions: {
        persistAuthorization: true,
        tagsSorter: 'alpha',
        operationsSorter: 'alpha',
        filter: true,
      },
    });
  }

  const corsOrigins = process.env.CORS_ORIGINS?.split(',')
    .map((o) => o.trim())
    .filter(Boolean);
  if (corsOrigins?.length) {
    app.enableCors({ origin: corsOrigins, credentials: true });
  }
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();

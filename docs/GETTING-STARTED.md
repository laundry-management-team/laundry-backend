# Getting Started

Onboarding guide for the Laundry backend.

## What this is

A NestJS API with:

- **PostgreSQL** via Prisma (`prisma/schema.prisma`)
- **Redis** for BullMQ job queues, the rate limiter (`@nestjs/throttler`), and caching
- **Sentry** for error tracking (optional locally)
- **i18n** responses (`en`, `lo`, `zh`, `th`)
- Swagger docs, health checks, Prometheus metrics, and a Bull Board queue dashboard

## 1. Install

```bash
npm install
```

## 2. Configure environment variables

Create a `.env` file in the project root (it's gitignored, so it's never committed). Required keys:

```bash
PORT=3030
DATABASE_URL="postgresql://<user>:<password>@localhost:5432/laundry_db?options=-c%20timezone%3DUTC"
REDIS_URL=redis://localhost:6379
JWT_ACCESS_SECRET=<generate-a-random-secret>
JWT_REFRESH_SECRET=<generate-a-random-secret>
JWT_ACCESS_TTL=15m
JWT_REFRESH_TTL=7d
SENTRY_DSN=
SMS_GATEWAY_URL=
PUSH_PROVIDER_URL=
```

## 3. Set up the database

Generate the Prisma client and apply migrations:

```bash
npx prisma generate
npx prisma migrate dev
```

## 4. Run the app

```bash
npm run start:dev
```

The API listens on `PORT` from `.env` (defaults to `3030` in the example above; falls back to `3000` if unset).

Once running, check:

- Swagger UI: `http://localhost:3030/docs`

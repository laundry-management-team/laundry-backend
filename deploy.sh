#!/usr/bin/env bash
# Zero-downtime deploy for the laundry-backend PM2 app.
# Usage: ./deploy.sh
set -euo pipefail

APP_NAME="laundry"

echo "==> Pulling latest code"
git pull

echo "==> Installing dependencies"
npm ci

echo "==> Applying database migrations"
npx prisma migrate deploy

echo "==> Building"
npm run build

echo "==> Reloading PM2 (zero-downtime)"
sudo pm2 reload "$APP_NAME"

echo "==> Done"
sudo pm2 status "$APP_NAME"

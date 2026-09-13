import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { readFileSync } from 'fs';
import {
  cert,
  getApps,
  initializeApp,
  ServiceAccount,
  type App,
} from 'firebase-admin/app';
import { getMessaging, type Messaging } from 'firebase-admin/messaging';

@Injectable()
export class FirebaseService implements OnModuleInit {
  private readonly logger = new Logger(FirebaseService.name);
  private app?: App;

  onModuleInit() {
    const existing = getApps()[0];
    if (existing) {
      this.app = existing;
      return;
    }

    const credentialsPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
    if (!credentialsPath) {
      if (process.env.NODE_ENV === 'production') {
        throw new Error(
          'FIREBASE_SERVICE_ACCOUNT_PATH is required in production',
        );
      }
      this.logger.warn(
        'FIREBASE_SERVICE_ACCOUNT_PATH not set - Firebase push notifications disabled',
      );
      return;
    }

    let serviceAccount: ServiceAccount;
    try {
      serviceAccount = JSON.parse(readFileSync(credentialsPath, 'utf-8'));
    } catch (err) {
      throw new Error(
        `Failed to load Firebase service account from "${credentialsPath}": ${(err as Error).message}`,
      );
    }

    this.app = initializeApp({
      credential: cert(serviceAccount),
    });
    this.logger.log('Firebase Admin SDK initialized');
  }

  get messaging(): Messaging | undefined {
    return this.app ? getMessaging(this.app) : undefined;
  }
}

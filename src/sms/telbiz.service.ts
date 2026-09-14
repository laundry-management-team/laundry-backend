import { Injectable, Logger } from '@nestjs/common';
import { RedisService } from '../redis/redis.service';

const TOKEN_CACHE_KEY = 'telbiz:access_token';
const TOKEN_EXPIRY_BUFFER_SECONDS = 60;
const TOKEN_URL = 'https://api.telbiz.la/api/v1/Connect/token';
const SMS_URL = 'https://api.telbiz.la/api/v1/SMSService/newtransaction';

interface TelbizTokenResponse {
  accessToken: string;
  expire: number;
  success: boolean;
  message: string;
}

interface TelbizSmsResponse {
  response: { code: string; message: string; success: boolean; detail: string };
  key: { partitionKey: string; rangeKey: string };
}

@Injectable()
export class TelbizService {
  private readonly logger = new Logger(TelbizService.name);

  constructor(private readonly redis: RedisService) {}

  async sendSms(
    localPhone: string,
    message: string,
    title: 'OTP' | 'Info' | 'Promotion' | 'News' = 'OTP',
  ): Promise<TelbizSmsResponse> {
    const accessToken = await this.getAccessToken();

    const response = await fetch(SMS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ title, phone: localPhone, message }),
    });

    const data = (await response.json()) as TelbizSmsResponse;
    if (!response.ok || !data.response?.success) {
      throw new Error(
        data.response?.detail || `Telbiz SMS failed (${response.status})`,
      );
    }
    return data;
  }

  private async getAccessToken(): Promise<string> {
    const cached = await this.redis.get(TOKEN_CACHE_KEY);
    if (cached) return cached;

    const response = await fetch(TOKEN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        clientID: process.env.TELBIZ_CLIENT_ID,
        secret: process.env.TELBIZ_SECRET,
        grantType: 'client_credentials',
      }),
    });

    const data = (await response.json()) as TelbizTokenResponse;
    if (!response.ok || !data.success) {
      throw new Error(`Telbiz token request failed: ${data.message}`);
    }

    await this.redis.set(
      TOKEN_CACHE_KEY,
      data.accessToken,
      'EX',
      data.expire - TOKEN_EXPIRY_BUFFER_SECONDS,
    );
    this.logger.log('Telbiz access token refreshed');
    return data.accessToken;
  }
}

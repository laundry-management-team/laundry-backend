import { SetMetadata } from '@nestjs/common';

export const RESPONSE_MESSAGE_KEY = 'responseMessage';

export const ResponseMessage = (key: string) =>
  SetMetadata(RESPONSE_MESSAGE_KEY, key);

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { OtpService } from './otp.service';
import { SmsModule } from '../sms/sms.module';

@Module({
  imports: [PassportModule, JwtModule.register({}), SmsModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, OtpService],
  exports: [OtpService],
})
export class AuthModule {}

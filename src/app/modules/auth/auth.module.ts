import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { tokenConfig } from '@config/token.config';

import { TokenService } from '@factories/token.factory';
import { EncryptService } from '@factories/encrypt.factory';

import { User } from '@modules/users/user.entity';
import { UserRepository } from '@modules/users/user.repository';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.register(tokenConfig),
    TypeOrmModule.forFeature([User, UserRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService, TokenService, EncryptService, UserRepository],
})
export class AuthModule {}

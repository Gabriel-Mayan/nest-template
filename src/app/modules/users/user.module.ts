import { Module } from '@nestjs/common';

import { EmailService } from '@factories/email.factory';

import { UserRepository } from './user.dto';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, EmailService],
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmailService } from '@factories/email.factory';

import { User } from './user.entity';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [EmailService, UserRepository, UserService],
  imports: [TypeOrmModule.forFeature([User, UserRepository])],
})
export class UsersModule {}

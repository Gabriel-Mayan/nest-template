import {
  Injectable,
  ConflictException,
  UnprocessableEntityException,
} from '@nestjs/common';

import { QueryFailedError } from 'typeorm';

import { ICreateUser } from './user.interfaces';
import { UserRepository } from './user.repository';
import { EncryptService } from '../../factories/encrypt.factory';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly encryptService: EncryptService,
  ) {}

  async encryptPassword(password: string): Promise<string> {
    return this.encryptService.encryptData(password);
  }

  async createUser(user: ICreateUser): Promise<void> {
    try {
      const insertedUser = await this.userRepository.createUser(user);

      if (!insertedUser.raw.affectedRows) {
        throw new UnprocessableEntityException('Failed to insert user');
      }
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new ConflictException('The email provided is already registered');
      }
    }
  }
}

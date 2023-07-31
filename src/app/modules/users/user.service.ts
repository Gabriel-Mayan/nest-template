import { Injectable } from '@nestjs/common';

import { ICreateUser } from './user.interfaces';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDto: ICreateUser): Promise<void> {
    await this.userRepository.createUser(createUserDto);
  }
}

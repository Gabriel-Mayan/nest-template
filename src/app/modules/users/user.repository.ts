import {
  IsNull,
  Repository,
  InsertResult,
  UpdateResult,
  FindOptionsWhere,
} from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './user.entity';
import { IDatabaseUser, ICreateUser, IUpdateUser } from './user.interfaces';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  getUsers(): Promise<IDatabaseUser[]> {
    return this.repository.find({ where: { deletedAt: IsNull() } });
  }

  findUser(query: FindOptionsWhere<User>): Promise<IDatabaseUser | null> {
    return this.repository.findOneBy({ deletedAt: IsNull(), ...query });
  }

  createUser(user: ICreateUser): Promise<InsertResult> {
    return this.repository.insert(user);
  }

  updateUser(id: string, updatedData: IUpdateUser): Promise<UpdateResult> {
    return this.repository.update({ id }, updatedData);
  }

  deleteUser(id: string): Promise<UpdateResult> {
    return this.repository.softDelete(id);
  }
}

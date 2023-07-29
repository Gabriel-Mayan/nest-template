import { InsertResult, UpdateResult, FindOptionsWhere, IsNull } from 'typeorm';

import User from './user.entity';
import { DatabaseService } from '@factories/database.factory';
import { IDatabaseUser, ICreateUser, IUpdateUser } from './user.interfaces';

const databaseService = new DatabaseService();
const repository = databaseService.createRepository(User);

export class UserRepository {
  getUsers(): Promise<IDatabaseUser[]> {
    return repository.find({ where: { deletedAt: IsNull() } });
  }

  findUser(query: FindOptionsWhere<User>): Promise<IDatabaseUser | null> {
    return repository.findOneBy({ deletedAt: IsNull(), ...query });
  }

  createUser(user: ICreateUser): Promise<InsertResult> {
    return repository.insert(user);
  }

  updateUser(id: string, updatedData: IUpdateUser): Promise<UpdateResult> {
    return repository.update({ id }, updatedData);
  }

  deleteUser(id: string): Promise<UpdateResult> {
    return repository.softDelete(id);
  }
}

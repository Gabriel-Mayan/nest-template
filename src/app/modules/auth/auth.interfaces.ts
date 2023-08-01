import { IDatabaseUser } from '../users/user.interfaces';

export interface IRequestLogin {
  email: string;
  password: string;
}

export type IAuthUser = Omit<IDatabaseUser, 'password'>;

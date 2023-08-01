import { Injectable, UnauthorizedException } from '@nestjs/common';

import { IAuthUser } from './auth.interfaces';
import { UserRepository } from '@modules/users/user.repository';

import { TokenService } from '@factories/token.factory';
import { EncryptService } from '@factories/encrypt.factory';

@Injectable()
export class AuthService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly encryptService: EncryptService,
    private readonly userRepository: UserRepository,
  ) {}

  async validateUser(email: string, password: string): Promise<IAuthUser> {
    const user = await this.userRepository.findUser({ email });

    if (!user) {
      throw new UnauthorizedException('Username or password is invalid');
    }

    const verifiedPassword = await this.encryptService.compareData(
      password,
      user.password,
    );

    if (!verifiedPassword) {
      throw new UnauthorizedException('Username or password is invalid');
    }

    const { password: _, ...authUser } = user;

    return authUser;
  }

  login(user: IAuthUser) {
    const { id, email } = user;
    const payload = { email, id };
    const token = this.tokenService.generateUserToken(payload);

    return { user, token };
  }
}

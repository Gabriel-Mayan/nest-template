import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUserToken } from '@modules/users/user.interfaces';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  generateUserToken(user: IUserToken) {
    return this.jwtService.sign(user);
  }

  validateToken(token: string) {
    return this.jwtService.verify(token);
  }
}

import { Controller, Post, Body } from '@nestjs/common';

import { AuthService } from './auth.service';
import { IRequestLogin } from './auth.interfaces';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() body: IRequestLogin) {
    const { email, password } = body;

    const validateUser = await this.authService.validateUser(email, password);

    return this.authService.login(validateUser);
  }
}

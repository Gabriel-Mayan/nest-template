import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';

import { UserService } from './user.service';
import { ICreateUser } from './user.interfaces';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() user: ICreateUser) {
    const { name, email, password } = user;

    const newUser: ICreateUser = {
      name,
      email,
      password: await this.userService.encryptPassword(password),
      isActive: true,
    };

    await this.userService.createUser(newUser);
  }
}

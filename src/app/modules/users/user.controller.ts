import { Body, Controller, Post } from '@nestjs/common';

import { UserService } from './user.service';
import { ICreateUser } from './user.interfaces';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: ICreateUser): Promise<void> {
    await this.userService.createUser(user);
  }
}

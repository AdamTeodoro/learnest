import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

import { IUser } from './interfaces/IUser';
import { UserService } from './services/user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/createUser')
  createUser(body: {user: Omit<IUser, 'id'>}) {
    const user = this.userService.createUser(body.user);
    return {
      message: 'success',
      idUser: user.id
    }
  }

}

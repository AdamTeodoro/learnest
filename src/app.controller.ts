import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { IRequestUser } from './interfaces/IUser';

import { AppService } from './app.service';
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
  async createUser(
    @Body() 
    body: {
      user: IRequestUser
    }
  ) {
    const { id } = await this.userService.createUser(body.user);
    return {
      id,
      message: 'success'
    }
  }

  @Get('/getUserByEmail')
  async getUserByEmail(
    @Param() email: string
  ) {
    const user = await this.userService.getUserByEmail(email);
    return {
      user,
      message: 'success'
    }
  }

}

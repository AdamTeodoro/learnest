import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';

import { AppService } from './app.service';
import { UserService } from './services/user/user.service';
import { PrismaService } from './services/prisma/prisma.service';

const defaultCreateUserBody = {
  user: {
    email: "adamteodoronunes1@gmail.com",
    name: "Adam Teodoro"
  }
};

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        UserService,
        PrismaService
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('root', () => {
    it('should success', async () => {
      const requestResult = await appController.createUser(defaultCreateUserBody)
      expect(requestResult.message).toBe('success');
    });
  });
  
  describe('root', () => {
    it('should have id type string', async () => {
      const requestResult = await  appController.createUser(defaultCreateUserBody);
      expect('number' == typeof requestResult.id).toBeTruthy();
    });
  });

});

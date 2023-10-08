import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';

import { AppService } from './app.service';
import { UserService } from './services/user/user.service';

const defaultCreateUserBody = {
  user: {
    email: "adamteodoronunes@gmail.com",
    name: "Adam Teodoro"
  }
};

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, UserService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('root', () => {
    it('should success', () => {
      const requestResult = appController.createUser(defaultCreateUserBody)
      expect(requestResult.message).toBe('success');
    });
  });
  
  describe('root', () => {
    it('should have id type string', () => {
      const requestResult = appController.createUser(defaultCreateUserBody);
      expect('string' == typeof requestResult.idUser).toBeTruthy()
    });
  });

});

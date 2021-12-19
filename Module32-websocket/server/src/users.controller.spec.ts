import * as request from 'supertest';

import { Test, TestingModule } from '@nestjs/testing';
import { UsersRepo } from './modules/users/repo/users.repo';
import { UsersService } from './modules/users/users.service';
import { INestApplication } from '@nestjs/common';
import { UsersController } from './modules/users/users.controller';

const mockOneUser = {
  _id: 'f744a6f1-c630-4bf6-988c-537efaa7e838',
  username: 'Ivan',
  bdayDate: '2021-07-09',
  email: 'w@w',
  phone: '89060450301',
  passport: '2222',
  passDate: '2021-07-09',
  passOrg: 'ff',
  passOrgCode: '333',
  licenseNumber: '2211',
  dateLicense: '2021-07-09',
  pass: '$2b$10$X7Qcbog4i1QCXY1vYM8m1eNa1.aKvWPWSv/c/o8.WBZx8OMwSNuea',
};
const mockUsers = [mockOneUser];
const usersRepoMock = {
  getAllUsers: jest.fn().mockReturnValue(mockUsers),
  createUser: jest.fn().mockReturnValue(mockOneUser),
};

describe('Users Controller', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: UsersRepo,
          useValue: usersRepoMock,
        },
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('should get users', async () => {
    await request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect(mockUsers);
  });

  it('should create user', async () => {
    const mockUserDto = {
      username: 'Ivan',
      bdayDate: '2021-07-09',
      email: 'w@w',
      phone: '89060450301',
      passport: '2222',
      passDate: '2021-07-09',
      passOrg: 'ff',
      passOrgCode: '333',
      licenseNumber: '2211',
      dateLicense: '2021-07-09',
      pass: 'qwerty123',
    };
    await request(app.getHttpServer())
      .post('/users')
      .send(mockUserDto)
      .expect(201)
      .expect(mockOneUser);
  });
});

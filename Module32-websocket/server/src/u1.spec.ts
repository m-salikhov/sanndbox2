import { Test, TestingModule } from '@nestjs/testing';
import { UsersRepo } from './modules/users/repo/users.repo';
import { UsersService } from './modules/users/users.service';

class UsersRepoMock extends UsersRepo {
  public getAllUsers(): any {
    return [];
  }

  public createUser(user: any): any {
    return user;
  }
}

describe('Users Service', () => {
  let usersRepo: UsersRepo;
  let usersService: UsersService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersRepo,
          useClass: UsersRepoMock,
        },
      ],
    }).compile();

    usersService = app.get(UsersService);
    usersRepo = app.get(UsersRepo);
  });

  it('test', () => {
    expect(2 + 2).toBe(4);
  });

  it('should return users on call findAllUsers', async () => {
    const mockUsers = [
      {
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
      },
    ];

    const usersRepoSpy: any = jest
      .spyOn(usersRepo, 'getAllUsers')
      .mockResolvedValue(mockUsers);

    const result = await usersService.getAllUsers();

    expect(result.length).toEqual(mockUsers.length);
    expect(result[0]._id).toEqual(mockUsers[0]._id);
    expect(usersRepoSpy).toHaveBeenCalled();
    expect(usersRepoSpy).toHaveBeenCalledTimes(1);
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
    const mockID = 'test id';
    const mockPass = 'test pass';

    const usersRepoSpy: any = jest
      .spyOn(usersRepo, 'createUser')
      .mockResolvedValue({ _id: mockID, ...mockUserDto, pass: mockPass });

    const result = await usersService.createUser(mockUserDto);

    expect(result._id).toEqual(mockID);
    expect(result.pass).toEqual(mockPass);
    expect(result.email).toEqual(mockUserDto.email);
    expect(usersRepoSpy).toHaveBeenCalled();
    expect(usersRepoSpy).toHaveBeenCalledTimes(1);
  });
});

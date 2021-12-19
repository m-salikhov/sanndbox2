import { Injectable } from '@nestjs/common';
import { UserDto } from './DTO/user.dto';
import { UserVKDto } from './DTO/userVK.dto';
import { User } from './entities/user.entity';
import { UserVK } from './entities/userVK.entity';
import { UsersRepo } from './repo/users.repo';

@Injectable()
export class UsersService {
  constructor(private usersRepo: UsersRepo) {}

  async createUser(user: UserDto): Promise<User> {
    return await this.usersRepo.createUser(user);
  }

  async loginUserVK(user: UserVKDto): Promise<UserVK> {
    return await this.usersRepo.loginUserVK(user);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.usersRepo.getAllUsers();
  }

  async getOneUser(id: string): Promise<User> {
    return await this.usersRepo.getOneUser(id);
  }

  async getOneUserVK(id: string): Promise<UserVK> {
    return await this.usersRepo.getOneUserVK(id);
  }

  async getOneByEmail(email: string): Promise<User> {
    return await this.usersRepo.getOneByEmail(email);
  }
}

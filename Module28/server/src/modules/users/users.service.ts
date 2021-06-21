import { Injectable } from '@nestjs/common';
import { UserDto } from './DTO/user.dto';
import { UsersRepo } from './repo/users.repo';

@Injectable()
export class UsersService {
  constructor(private usersRepo: UsersRepo) {}

  async createUser(user: UserDto) {
    return await this.usersRepo.createUser(user);
  }

  async findAllUsers() {
    return await this.usersRepo.getAll();
  }

  async getOne(id: string) {
    return await this.usersRepo.getOne(id);
  }
}

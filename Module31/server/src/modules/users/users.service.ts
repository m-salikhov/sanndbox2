import { Injectable } from '@nestjs/common';
import { UserDto } from './DTO/user.dto';
import { User } from './entities/user.entity';
import { UsersRepo } from './repo/users.repo';

@Injectable()
export class UsersService {
  constructor(private usersRepo: UsersRepo) {}

  async createUser(user: UserDto): Promise<User> {
    return await this.usersRepo.createUser(user);
  }

  async findAllUsers(): Promise<User[]> {
    return await this.usersRepo.getAllUsers();
  }

  async getOneUser(id: string): Promise<User> {
    return await this.usersRepo.getOneUser(id);
  }
}

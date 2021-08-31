import { Injectable } from '@nestjs/common';
import { User, usersDB } from './users.db';

@Injectable()
export class UsersService {
  private readonly users = usersDB;

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}

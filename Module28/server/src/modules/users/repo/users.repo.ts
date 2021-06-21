import { Injectable } from '@nestjs/common';
import { getMongoRepository } from 'typeorm';
import { User } from '../entities/user.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsersRepo {
  async createUser(user: User) {
    const repository = getMongoRepository(User);
    const newUser = { ...user, _id: uuid() };
    return await repository.save(newUser);
  }

  async getAll() {
    const repository = getMongoRepository(User);
    return await repository.find();
  }

  async getOne(id: string) {
    const repository = getMongoRepository(User);
    return await repository.findOne({ _id: id });
  }
}

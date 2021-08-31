import { Injectable } from '@nestjs/common';
import { getMongoRepository } from 'typeorm';
import { User } from '../entities/user.entity';
import { v4 as uuid } from 'uuid';
import { UserDto } from '../DTO/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersRepo {
  async createUser(userDto: UserDto) {
    const repository = getMongoRepository(User);

    const saltOrRounds = 10;
    const password = userDto.pass;
    const hash = await bcrypt.hash(password, saltOrRounds);
    const newUser = { ...userDto, _id: uuid(), pass: hash };
    return await repository.save(newUser);
  }

  async getAllUsers() {
    const repository = getMongoRepository(User);
    return await repository.find();
  }

  async getOneUser(id: string) {
    const repository = getMongoRepository(User);
    return await repository.findOne({ _id: id });
  }
}

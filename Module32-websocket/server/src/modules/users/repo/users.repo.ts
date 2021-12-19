import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { getMongoRepository } from 'typeorm';
import { User } from '../entities/user.entity';
import { v4 as uuid } from 'uuid';
import { UserDto } from '../DTO/user.dto';
import * as bcrypt from 'bcrypt';
import { UserVK } from '../entities/userVK.entity';
import { UserVKDto } from '../DTO/userVK.dto';

@Injectable()
export class UsersRepo {
  async createUser(user: UserDto): Promise<User> {
    const repository = getMongoRepository(User);

    const userCheck = await repository.findOne({ email: user.email });
    if (userCheck)
      throw new ConflictException('Email уже существует в системе');

    const password = user.pass;
    const hash = await bcrypt.hash(password, 10);
    const newUser = { _id: uuid(), ...user, pass: hash };
    return await repository.save(newUser);
  }

  async loginUserVK(userVK: UserVKDto): Promise<UserVK> {
    const repository = getMongoRepository(UserVK);

    const user = await repository.findOne({ uid: userVK.uid });

    if (user) return user;
    const newUserVK = { _id: uuid(), ...userVK };

    return await repository.save(newUserVK);
  }

  async getAllUsers() {
    const repository = getMongoRepository(User);
    return await repository.find();
  }

  async getOneUser(id: string) {
    const repository = getMongoRepository(User);

    return await repository.findOne({ _id: id });
  }

  async getOneUserVK(id: string) {
    const repository = getMongoRepository(UserVK);

    return await repository.findOne({ _id: id });
  }

  async getOneByEmail(email: string) {
    const repository = getMongoRepository(User);
    const user = await repository.findOne({ email });
    if (!user) throw new UnauthorizedException();
    return user;
  }
}

import {
  ConflictException,
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { getMongoRepository } from 'typeorm';
import { User } from '../entities/user.entity';
import { v4 as uuid } from 'uuid';
import { UserDto } from '../DTO/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersRepo {
  async createUser(userDto: UserDto): Promise<User> {
    const repository = getMongoRepository(User);

    const userCheck = await repository.findOne({ email: userDto.email });
    if (userCheck)
      throw new ConflictException('Email уже существует в системе');

    const saltOrRounds = 10;
    const password = userDto.pass;
    const hash = await bcrypt.hash(password, saltOrRounds);
    const newUser = { _id: uuid(), ...userDto, pass: hash };
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

  async getOneByEmail(email: string) {
    const repository = getMongoRepository(User);
    const user = await repository.findOne({ email });
    if (!user) throw new UnauthorizedException();
    return user;
  }
}

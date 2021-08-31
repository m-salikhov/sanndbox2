import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { getMongoRepository } from 'typeorm';
import { Message } from '../entities/message.entity';
import { v4 as uuid } from 'uuid';
import { CreateMessageDto } from '../dto/create-message.dto';
import { UsersService } from 'src/modules/users/users.service';

@Injectable()
export class MessagesRepo {
  constructor(private usersService: UsersService) {}
  async getAll(user) {
    const repository = getMongoRepository(Message);
    const author = await this.usersService.getOneUser(user.userId);
    const { pass, ...authorMessage } = author;
    console.log(authorMessage);
    if (!authorMessage) {
      throw new HttpException(`User not found`, HttpStatus.NOT_FOUND);
    }
    return await repository.find();
  }

  async createMessage(message: CreateMessageDto, user: any): Promise<Message> {
    const repository = getMongoRepository(Message);
    const toUserFool = await this.usersService.getOneUser(message.toUserId);
    const toUser = {
      _id: toUserFool._id,
      username: toUserFool.username,
      email: toUserFool.email,
    };
    if (!toUser) {
      throw new HttpException(`User not found`, HttpStatus.NOT_FOUND);
    }
    console.log(user);
    const newMessage: Message = await repository.create({
      _id: uuid(),
      user,
      toUser,
      body: message.body,
    });
    return await repository.save(newMessage);
  }
}

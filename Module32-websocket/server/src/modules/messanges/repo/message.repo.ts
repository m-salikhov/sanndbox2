import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { getMongoRepository } from 'typeorm';
import { Message } from '../entities/message.entity';
import { v4 as uuid } from 'uuid';
import { CreateMessageDto } from '../dto/create-message.dto';
import { UsersService } from 'src/modules/users/users.service';
import { UserDto } from 'src/modules/users/DTO/user.dto';

@Injectable()
export class MessagesRepo {
  constructor(private usersService: UsersService) {}
  async getAll() {
    const repository = getMongoRepository(Message);

    return await repository.find();
  }

  async createMessage(
    message: CreateMessageDto,
    user: UserDto,
  ): Promise<Message> {
    const repository = getMongoRepository(Message);
    const toUserFool =
      (await this.usersService.getOneUser(message.toUserId)) ||
      (await this.usersService.getOneUserVK(message.toUserId));

    if (!toUserFool) {
      throw new HttpException(`User not found`, HttpStatus.NOT_FOUND);
    }
    const toUser = {
      _id: toUserFool._id,
      username: toUserFool.username,
    };

    const newMessage: Message = await repository.create({
      _id: uuid(),
      user,
      toUser,
      body: message.body,
    });
    return await repository.save(newMessage);
  }

  async getAllMessagesById(user: UserDto) {
    const repository = getMongoRepository(Message);

    return await repository.find({
      where: {
        $or: [
          { 'user._id': { $eq: user._id } },
          { 'toUser._id': { $eq: user._id } },
        ],
      },
    });
  }

  async deleteAll() {
    const repository = getMongoRepository(Message);
    await repository.deleteMany({
      'user.username': {
        $in: ['Kolya', 'Olya', 'Ivan', 'Thomas Andersen', 'Максим Салихов'],
      },
    });
    return { msg: 'Сообщения удалены' };
  }
}

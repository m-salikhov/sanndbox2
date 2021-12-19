import { Injectable } from '@nestjs/common';
import { UserDto } from '../users/DTO/user.dto';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { MessagesRepo } from './repo/message.repo';

@Injectable()
export class MessangesService {
  public push: (message: Message) => void;

  constructor(private messagesRepo: MessagesRepo) {}

  public attachSender(sender: (message: Message) => void) {
    this.push = sender;
  }

  async findAll() {
    return await this.messagesRepo.getAll();
  }

  async createMessage(createMessageDto: CreateMessageDto, user: UserDto) {
    return await this.messagesRepo.createMessage(createMessageDto, user);
  }

  async messagesById(user: UserDto) {
    return await this.messagesRepo.getAllMessagesById(user);
  }

  async deleteAll() {
    return await this.messagesRepo.deleteAll();
  }
}

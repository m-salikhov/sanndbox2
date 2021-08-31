import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
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

  async findAll(user) {
    return await this.messagesRepo.getAll(user);
  }

  async createMessage(createMessageDto: CreateMessageDto, user: User) {
    return await this.messagesRepo.createMessage(createMessageDto, user);
  }
}

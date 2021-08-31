import { User } from '../users/entities/user.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { MessagesRepo } from './repo/message.repo';
export declare class MessangesService {
    private messagesRepo;
    push: (message: Message) => void;
    constructor(messagesRepo: MessagesRepo);
    attachSender(sender: (message: Message) => void): void;
    findAll(user: any): Promise<Message[]>;
    createMessage(createMessageDto: CreateMessageDto, user: User): Promise<Message>;
}

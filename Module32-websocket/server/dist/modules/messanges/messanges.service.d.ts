import { UserDto } from '../users/DTO/user.dto';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { MessagesRepo } from './repo/message.repo';
export declare class MessangesService {
    private messagesRepo;
    push: (message: Message) => void;
    constructor(messagesRepo: MessagesRepo);
    attachSender(sender: (message: Message) => void): void;
    findAll(): Promise<Message[]>;
    createMessage(createMessageDto: CreateMessageDto, user: UserDto): Promise<Message>;
    messagesById(user: UserDto): Promise<Message[]>;
    deleteAll(): Promise<{
        msg: string;
    }>;
}

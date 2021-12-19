import { Message } from '../entities/message.entity';
import { CreateMessageDto } from '../dto/create-message.dto';
import { UsersService } from 'src/modules/users/users.service';
export declare class MessagesRepo {
    private usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<Message[]>;
    createMessage(message: CreateMessageDto, user: any): Promise<Message>;
    getAllMessagesById(user: any): Promise<Message[]>;
    deleteAll(): Promise<{
        msg: string;
    }>;
}

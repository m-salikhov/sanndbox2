import { Message } from '../entities/message.entity';
import { CreateMessageDto } from '../dto/create-message.dto';
import { UsersService } from 'src/modules/users/users.service';
export declare class MessagesRepo {
    private usersService;
    constructor(usersService: UsersService);
    getAll(user: any): Promise<Message[]>;
    createMessage(message: CreateMessageDto, user: any): Promise<Message>;
}

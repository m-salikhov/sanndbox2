import { Message } from '../entities/message.entity';
import { CreateMessageDto } from '../dto/create-message.dto';
import { UsersService } from 'src/modules/users/users.service';
import { UserDto } from 'src/modules/users/DTO/user.dto';
export declare class MessagesRepo {
    private usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<Message[]>;
    createMessage(message: CreateMessageDto, user: UserDto): Promise<Message>;
    getAllMessagesById(user: UserDto): Promise<Message[]>;
    deleteAll(): Promise<{
        msg: string;
    }>;
}

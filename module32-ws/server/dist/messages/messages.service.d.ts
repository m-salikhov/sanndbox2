import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageEntity } from './entity/message.entity';
export declare class MessagesService {
    private readonly messageRepository;
    private readonly usersService;
    constructor(messageRepository: Repository<MessageEntity>, usersService: UsersService);
    findAll(options?: FindManyOptions<MessageEntity>): Promise<MessageEntity[]>;
    create(user: UserDto, createMessageDto: CreateMessageDto): Promise<MessageEntity>;
}

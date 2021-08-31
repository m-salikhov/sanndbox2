import { CreateMessageDto } from './dto/create-message.dto';
import { MessageEntity } from './entity/message.entity';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    messages(req: any, selectedUser: string): Promise<MessageEntity[]>;
    create(req: any, createMessageDto: CreateMessageDto): Promise<MessageEntity>;
}

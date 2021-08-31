import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { MessangesService } from './messanges.service';
export declare class MessangesController {
    private messangesService;
    constructor(messangesService: MessangesService);
    messages(req: any): Promise<Message[]>;
    createMessage(createMessageDto: CreateMessageDto, req: any): Promise<Message>;
}

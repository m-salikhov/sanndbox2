import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { MessangesService } from './messanges.service';

@Controller('messages')
export class MessangesController {
  constructor(private messangesService: MessangesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  messages(): Promise<Message[]> {
    return this.messangesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  public async createMessage(
    @Body() createMessageDto: CreateMessageDto,
    @Req() req: any,
  ): Promise<Message> {
    const message = await this.messangesService.createMessage(
      createMessageDto,
      req.user,
    );

    this.messangesService.push(message);

    return message;
  }

  @UseGuards(JwtAuthGuard)
  @Get('/messagesById')
  messagesById(@Req() req: any): Promise<Message[]> {
    return this.messangesService.messagesById(req.user);
  }

  @Delete()
  deleteAll() {
    return this.messangesService.deleteAll();
  }
}

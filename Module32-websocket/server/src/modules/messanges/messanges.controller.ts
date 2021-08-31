import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { MessangesService } from './messanges.service';

@Controller('messages')
export class MessangesController {
  constructor(private messangesService: MessangesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  messages(@Req() req: any) {
    const user = req.user;
    console.log(user);

    return this.messangesService.findAll(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  public async createMessage(
    @Body() createMessageDto: CreateMessageDto,
    @Req() req: any,
  ): Promise<Message> {
    const user = req.user;
    // return this.messangesService.createMessage(message, user);
    const message = await this.messangesService.createMessage(
      createMessageDto,
      user,
    );

    this.messangesService.push(message);

    return message;
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesGateway } from 'src/messages/messages.gateway';
import { UsersRepo } from '../users/repo/users.repo';
import { UsersService } from '../users/users.service';
import { Message } from './entities/message.entity';
import { MessangesController } from './messanges.controller';
import { MessangesService } from './messanges.service';
import { MessagesRepo } from './repo/message.repo';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  controllers: [MessangesController],
  providers: [
    MessangesService,
    MessagesRepo,
    UsersService,
    UsersRepo,
    MessagesGateway,
  ],
})
export class MessangesModule {}

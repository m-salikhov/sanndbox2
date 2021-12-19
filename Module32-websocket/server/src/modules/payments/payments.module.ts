import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { UsersService } from '../users/users.service';
import { UsersRepo } from '../users/repo/users.repo';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [PaymentsController],
  imports: [HttpModule],
  providers: [UsersService, UsersRepo],
})
export class PaymentsModule {}

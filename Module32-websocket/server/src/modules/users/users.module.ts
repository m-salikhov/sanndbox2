import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepo } from './repo/users.repo';

@Module({
  providers: [UsersService, UsersRepo],
  controllers: [UsersController],
  exports: [UsersService, UsersRepo],
})
export class UsersModule {}

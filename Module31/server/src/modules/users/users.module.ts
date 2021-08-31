import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersRepo } from './repo/users.repo';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [UsersService, UsersRepo, UsersResolver],
})
export class UsersModule {}

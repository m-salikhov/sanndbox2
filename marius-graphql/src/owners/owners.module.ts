import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersResolver } from './owners.resolver';
import { OwnersRepo } from 'src/repository/owner.repo';

@Module({
  providers: [OwnersResolver, OwnersService, OwnersRepo],
  exports: [OwnersService, OwnersRepo],
})
export class OwnersModule {}

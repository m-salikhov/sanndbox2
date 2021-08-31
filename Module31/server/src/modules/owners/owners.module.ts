import { Module } from '@nestjs/common';
import { OwnersResolver } from './owners.resolver';
import { OwnersService } from './owners.service';
import { OwnersRepo } from './repo/owners.repo';

@Module({
  providers: [OwnersResolver, OwnersService, OwnersRepo],
})
export class OwnersModule {}

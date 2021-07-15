import { Module } from '@nestjs/common';
import { OwnersModule } from 'src/owners/owners.module';
import { PetsRepo } from '../repository/pet.repo';
import { PetsResolver } from './pets.resolver';
import { PetsService } from './pets.service';

@Module({
  imports: [OwnersModule],
  providers: [PetsResolver, PetsService, PetsRepo],
})
export class PetsModule {}

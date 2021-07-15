import { Injectable } from '@nestjs/common';
import { Owner } from 'src/owners/entities/owner.entity';
import { OwnersService } from 'src/owners/owners.service';
import { PetsRepo } from 'src/repository/pet.repo';
import { CreatePetInput } from './dto/create-pet-input';
import { Pet } from './Entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(
    private petsRepo: PetsRepo,
    private ownerService: OwnersService,
  ) {}

  async createPet(createPetInput: CreatePetInput): Promise<Pet> {
    return await this.petsRepo.createPet(createPetInput);
  }

  async getAll(): Promise<Pet[]> {
    return await this.petsRepo.getAll();
  }

  async getOne(id: string): Promise<Pet> {
    return this.petsRepo.getOne(id);
  }

  getOwner(ownerID: string): Promise<Owner> {
    return this.ownerService.findOne(ownerID);
  }
}

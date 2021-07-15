import { Injectable } from '@nestjs/common';
import { CreatePetInput } from 'src/pets/dto/create-pet-input';
import { Pet } from 'src/pets/Entities/pet.entity';
import { getMongoRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PetsRepo {
  async createPet(createPetInput: CreatePetInput) {
    const repository = getMongoRepository(Pet);
    const newPet = { ...createPetInput, _id: uuid() };
    return await repository.save(newPet);
  }

  async getAll() {
    const repository = getMongoRepository(Pet);
    return await repository.find();
  }

  async getOne(id: string) {
    const repository = getMongoRepository(Pet);
    return await repository.findOne({ _id: id });
  }
}

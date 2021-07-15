/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './Entities/pet.entity';
import { CreatePetInput } from './dto/create-pet-input';
import { Owner } from 'src/owners/entities/owner.entity';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private petServise: PetsService) {}

  @Query((returns) => [Pet])
  pets(): Promise<Pet[]> {
    return this.petServise.getAll();
  }

  @Query((returns) => Pet)
  getOnePet(@Args('id') id: string): Promise<Pet> {
    return this.petServise.getOne(id);
  }

  @ResolveField((returns) => Owner)
  owner(@Parent() pet: Pet): Promise<Owner> {
    return this.petServise.getOwner(pet.ownerID);
  }

  @Mutation((returns) => Pet)
  createPet(@Args('createPetInput') createPetInput: CreatePetInput) {
    return this.petServise.createPet(createPetInput);
  }
}

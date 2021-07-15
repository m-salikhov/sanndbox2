import { PetsService } from './pets.service';
import { Pet } from './Entities/pet.entity';
import { CreatePetInput } from './dto/create-pet-input';
import { Owner } from 'src/owners/entities/owner.entity';
export declare class PetsResolver {
    private petServise;
    constructor(petServise: PetsService);
    pets(): Promise<Pet[]>;
    getOnePet(id: string): Promise<Pet>;
    owner(pet: Pet): Promise<Owner>;
    createPet(createPetInput: CreatePetInput): Promise<Pet>;
}

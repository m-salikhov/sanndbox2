import { CreatePetInput } from 'src/pets/dto/create-pet-input';
import { Pet } from 'src/pets/Entities/pet.entity';
export declare class PetsRepo {
    createPet(createPetInput: CreatePetInput): Promise<{
        _id: any;
        name: string;
        type?: string;
        ownerID: string;
    } & Pet>;
    getAll(): Promise<Pet[]>;
    getOne(id: string): Promise<Pet>;
}

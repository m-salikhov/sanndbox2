import { Owner } from 'src/owners/entities/owner.entity';
import { OwnersService } from 'src/owners/owners.service';
import { PetsRepo } from 'src/repository/pet.repo';
import { CreatePetInput } from './dto/create-pet-input';
import { Pet } from './Entities/pet.entity';
export declare class PetsService {
    private petsRepo;
    private ownerService;
    constructor(petsRepo: PetsRepo, ownerService: OwnersService);
    createPet(createPetInput: CreatePetInput): Promise<Pet>;
    getAll(): Promise<Pet[]>;
    getOne(id: string): Promise<Pet>;
    getOwner(ownerID: string): Promise<Owner>;
}

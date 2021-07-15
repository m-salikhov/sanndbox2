import { CreateOwnerInput } from 'src/owners/dto/create-owner.input';
import { Owner } from 'src/owners/entities/owner.entity';
export declare class OwnersRepo {
    createOwner(createOwnerInput: CreateOwnerInput): Promise<{
        _id: any;
        name: string;
    } & Owner>;
    getAll(): Promise<Owner[]>;
    findOne(id: string): Promise<Owner>;
}

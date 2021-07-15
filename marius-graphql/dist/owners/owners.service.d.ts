import { OwnersRepo } from 'src/repository/owner.repo';
import { CreateOwnerInput } from './dto/create-owner.input';
import { Owner } from './entities/owner.entity';
export declare class OwnersService {
    private ownersRepo;
    constructor(ownersRepo: OwnersRepo);
    create(createOwnerInput: CreateOwnerInput): Promise<{
        _id: any;
        name: string;
    } & Owner>;
    findAll(): Promise<Owner[]>;
    findOne(id: string): Promise<Owner>;
}

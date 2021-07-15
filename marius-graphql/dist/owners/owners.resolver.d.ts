import { OwnersService } from './owners.service';
import { Owner } from './entities/owner.entity';
import { CreateOwnerInput } from './dto/create-owner.input';
export declare class OwnersResolver {
    private readonly ownersService;
    constructor(ownersService: OwnersService);
    createOwner(createOwnerInput: CreateOwnerInput): Promise<{
        _id: any;
        name: string;
    } & Owner>;
    findAll(): Promise<Owner[]>;
    getOneOwner(id: string): Promise<Owner>;
}

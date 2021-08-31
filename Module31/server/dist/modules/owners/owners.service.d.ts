import { OwnerDto } from './dto/owner.dto';
import { Owner } from './entities/owner.entity';
import { OwnersRepo } from './repo/owners.repo';
export declare class OwnersService {
    private ownersRepo;
    constructor(ownersRepo: OwnersRepo);
    createOwner(ownerDto: OwnerDto): Promise<{
        _id: any;
        name: string;
        bdayDate: string;
        email: string;
        phone: string;
        passport: string;
        pass: string;
        passRepeat: string;
    } & Owner>;
    findAllOwners(): Promise<Owner[]>;
    getOneOwner(id: string): Promise<Owner>;
}

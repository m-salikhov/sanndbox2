import { OwnerDto } from './dto/owner.dto';
import { Owner } from './entities/owner.entity';
import { OwnersService } from './owners.service';
export declare class OwnersResolver {
    private ownersService;
    constructor(ownersService: OwnersService);
    owners(): Promise<Owner[]>;
    getOneOwner(id: string): Promise<Owner>;
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
}

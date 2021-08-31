import { OwnerDto } from '../dto/owner.dto';
import { Owner } from '../entities/owner.entity';
export declare class OwnersRepo {
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
    getAllOwners(): Promise<Owner[]>;
    getOneOwner(id: string): Promise<Owner>;
}

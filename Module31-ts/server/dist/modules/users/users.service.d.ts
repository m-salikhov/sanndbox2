import { UserDto } from './DTO/user.dto';
import { UsersRepo } from './repo/users.repo';
export declare class UsersService {
    private usersRepo;
    constructor(usersRepo: UsersRepo);
    createUser(user: UserDto): Promise<{
        _id: any;
        name: string;
        bdayDate: string;
        email: string;
        phone: string;
        passport: string;
        passDate: string;
        passOrg: string;
        passOrgCode: string;
        licenseNumber: string;
        dateLicense: string;
        pass: string;
        passRepeat: string;
    } & import("./entities/user.entity").User>;
    findAllUsers(): Promise<import("./entities/user.entity").User[]>;
    getOne(id: string): Promise<import("./entities/user.entity").User>;
}

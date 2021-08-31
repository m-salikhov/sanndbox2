import { User } from '../entities/user.entity';
import { UserDto } from '../DTO/user.dto';
export declare class UsersRepo {
    createUser(userDto: UserDto): Promise<{
        _id: any;
        pass: string;
        username: string;
        bdayDate: string;
        email: string;
        phone: string;
        passport: string;
        passDate: string;
        passOrg?: string;
        passOrgCode: string;
        licenseNumber: string;
        dateLicense: string;
        passRepeat: string;
    } & User>;
    getAllUsers(): Promise<User[]>;
    getOneUser(id: string): Promise<User>;
}

import { User } from '../entities/user.entity';
export declare class UsersRepo {
    createUser(user: User): Promise<{
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
    } & User>;
    getAll(): Promise<User[]>;
    getOne(id: string): Promise<User>;
}

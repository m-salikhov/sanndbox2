import { User } from '../entities/user.entity';
import { UserDto } from '../DTO/user.dto';
import { UserVK } from '../entities/userVK.entity';
import { UserVKDto } from '../DTO/userVK.dto';
export declare class UsersRepo {
    createUser(user: UserDto): Promise<User>;
    loginUserVK(userVK: UserVKDto): Promise<UserVK>;
    getAllUsers(): Promise<User[]>;
    getOneUser(id: string): Promise<User>;
    getOneUserVK(id: string): Promise<UserVK>;
    getOneByEmail(email: string): Promise<User>;
}

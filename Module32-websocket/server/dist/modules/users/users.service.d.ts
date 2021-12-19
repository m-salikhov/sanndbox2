import { UserDto } from './DTO/user.dto';
import { UserVKDto } from './DTO/userVK.dto';
import { User } from './entities/user.entity';
import { UserVK } from './entities/userVK.entity';
import { UsersRepo } from './repo/users.repo';
export declare class UsersService {
    private usersRepo;
    constructor(usersRepo: UsersRepo);
    createUser(user: UserDto): Promise<User>;
    loginUserVK(user: UserVKDto): Promise<UserVK>;
    getAllUsers(): Promise<User[]>;
    getOneUser(id: string): Promise<User>;
    getOneUserVK(id: string): Promise<UserVK>;
    getOneByEmail(email: string): Promise<User>;
}

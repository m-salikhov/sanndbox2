import { UserDto } from './DTO/user.dto';
import { User } from './entities/user.entity';
import { UsersRepo } from './repo/users.repo';
export declare class UsersService {
    private usersRepo;
    constructor(usersRepo: UsersRepo);
    createUser(user: UserDto): Promise<User>;
    findAllUsers(): Promise<User[]>;
    getOneUser(id: string): Promise<User>;
    getOneByEmail(email: string): Promise<User>;
}

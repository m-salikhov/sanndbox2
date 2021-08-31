import { UserDto } from './DTO/user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
export declare class UsersResolver {
    private usersService;
    constructor(usersService: UsersService);
    users(): Promise<User[]>;
    getOneUser(id: string): Promise<User>;
    createUser(userDto: UserDto): Promise<User>;
}

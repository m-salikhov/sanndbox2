import { UserDto } from './DTO/user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<User[]>;
    createUser(user: UserDto): Promise<User>;
    getOneUser(params: any): Promise<User>;
    getByEmail(params: any): Promise<User>;
}

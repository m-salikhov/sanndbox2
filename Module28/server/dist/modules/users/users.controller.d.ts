import { UserDto } from './DTO/user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAllUsers(): Promise<User[]>;
    createNewUser(userDto: UserDto): Promise<User>;
    getOneUser(params: any): Promise<User>;
    getByEmail(params: any): Promise<User>;
}

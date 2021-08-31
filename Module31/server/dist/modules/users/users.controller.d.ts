import { UserDto } from './DTO/user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAllUsers(): Promise<UserDto[]>;
    createNewUser(createUserDto: UserDto): Promise<UserDto>;
    getOne(params: any): Promise<import("./entities/user.entity").User>;
}

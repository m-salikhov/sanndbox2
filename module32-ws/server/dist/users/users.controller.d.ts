import { Request as Req } from 'express';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    users(req: Req): Promise<UserDto[]>;
}

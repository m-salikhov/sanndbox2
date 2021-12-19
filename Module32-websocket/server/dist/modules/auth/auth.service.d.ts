import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserVK } from '../users/entities/userVK.entity';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        payload: {
            username: any;
            sub: any;
        };
    }>;
    loginVK(userVK: UserVK): Promise<{
        access_token: string;
        payload: {
            username: string;
            sub: string;
        };
    }>;
}

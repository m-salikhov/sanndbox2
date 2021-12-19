import { AuthService } from './modules/auth/auth.service';
import { UserVKDto } from './modules/users/DTO/userVK.dto';
import { UsersService } from './modules/users/users.service';
export declare class AppController {
    private authService;
    private usersService;
    constructor(authService: AuthService, usersService: UsersService);
    login(req: any): Promise<{
        access_token: string;
        payload: {
            username: any;
            sub: any;
        };
    }>;
    loginVK(userVK: UserVKDto): Promise<any>;
}

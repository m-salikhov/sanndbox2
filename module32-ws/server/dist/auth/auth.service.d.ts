import { JwtService } from '@nestjs/jwt';
import { RegistrationStatus } from './interfaces/regisration-status.interface';
import { LoginStatus } from './interfaces/login-status.interface';
import { LoginUserDto } from '../users/dto/user-login.dto';
import { JwtPayload } from './interfaces/payload.interface';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UserDto } from '../users/dto/user.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(userDto: CreateUserDto): Promise<RegistrationStatus>;
    login(loginUserDto: LoginUserDto): Promise<LoginStatus>;
    validateUser(payload: JwtPayload): Promise<UserDto>;
    private _createToken;
}

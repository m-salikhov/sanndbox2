import { User } from '../entities/user.entity';
import { UserDto } from '../DTO/user.dto';
export declare class UsersRepo {
    createUser(userDto: UserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getOneUser(id: string): Promise<User>;
    getOneByEmail(email: string): Promise<User>;
}

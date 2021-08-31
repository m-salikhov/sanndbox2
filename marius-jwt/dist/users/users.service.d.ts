import { User } from './users.db';
export declare class UsersService {
    private readonly users;
    findOne(username: string): Promise<User | undefined>;
}

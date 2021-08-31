import { User } from 'src/modules/users/entities/user.entity';
export declare class Message {
    _id: string;
    user: User;
    toUser: User;
    body: string;
    createdAt: number;
}

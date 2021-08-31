import { UserEntity } from '../../users/entity/user.entity';
export declare class MessageEntity {
    id: string;
    user: UserEntity;
    toUser: UserEntity;
    body: string;
    createdAt: number;
}

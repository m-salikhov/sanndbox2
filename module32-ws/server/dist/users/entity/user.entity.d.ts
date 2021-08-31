export declare class UserEntity {
    id: string;
    username: string;
    password: string;
    email: string;
    hashPassword(): Promise<void>;
}

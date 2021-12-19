export declare class Message {
    _id: string;
    user: {
        _id: string;
        username: string;
    };
    toUser: {
        _id: string;
        username: string;
        email: string;
    };
    body: string;
    createdAt: number;
}

import { OnGatewayDisconnect, WsResponse, OnGatewayConnection } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { MessangesService } from 'src/modules/messanges/messanges.service';
export declare class MessagesGateway implements OnGatewayDisconnect, OnGatewayConnection {
    private readonly messangesService;
    private clientSocketMap;
    private logger;
    constructor(messangesService: MessangesService);
    handleMeassage(socket: Socket, payload: {
        accessToken: string;
    }): Promise<WsResponse<{
        success: boolean;
        message?: string;
    }>>;
    handleConnection(socket: Socket): void;
    handleDisconnect(socket: Socket): {
        event: string;
        data: {
            success: boolean;
            message: any;
        };
    };
}

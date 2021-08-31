import {
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { MessangesService } from 'src/modules/messanges/messanges.service';
import * as jwt from 'jsonwebtoken';
import { Logger } from '@nestjs/common';

@WebSocketGateway()
export class MessagesGateway
  implements OnGatewayDisconnect, OnGatewayConnection
{
  private clientSocketMap = new Map<
    string,
    { username: string; sub: string; socket: Socket }
  >();
  private logger: Logger = new Logger('MessageGateway');

  constructor(private readonly messangesService: MessangesService) {
    this.messangesService.attachSender((message) => {
      console.log(message);
      this.clientSocketMap.forEach(({ username, socket }) => {
        if (
          username === message.user.username ||
          username === message.toUser.username
        ) {
          socket.emit('message', message);
        }
      });
    });
  }

  @SubscribeMessage('auth-te')
  async handleMeassage(
    socket: Socket,
    payload: { accessToken: string },
  ): Promise<WsResponse<{ success: boolean; message?: string }>> {
    // console.log('payload: ', payload);

    try {
      const { username, sub, exp } = jwt.verify(
        payload?.accessToken,
        process.env.SECRET,
      ) as { username: string; sub: string; exp: number };

      const currentUser = [{ username, sub }];

      if (exp * 1000 < Date.now()) {
        throw new Error('Token expired');
      }

      this.clientSocketMap.set(socket.id, {
        username,
        sub,
        socket,
      });

      this.clientSocketMap.forEach(({ sub, socket }) => {
        if (currentUser[0].sub !== sub) socket.emit('newUser', currentUser);
      });

      this.logger.warn(
        `connected and stored client: ${socket.id}`,
        ' MessageGateway',
      );
    } catch (error) {
      return {
        event: 'auth-ed',
        data: {
          success: false,
          message: error.message,
        },
      };
    }
    // console.log(this.clientSocketMap);
    return {
      event: 'auth-ed',
      data: { success: true },
    };
  }
  handleConnection(socket: Socket) {
    // console.log(this.clientSocketMap.size);
    console.log(socket.id);

    // console.log(this.clientSocketMap);
    const values: any = [...this.clientSocketMap.values()];
    const onUsers = values.map((elem) => {
      const newElem = { username: elem.username, sub: elem.sub };
      return newElem;
    });
    socket.emit('getAllConnectUsers', onUsers);
  }

  handleDisconnect(socket: Socket) {
    const { username, sub } = this.clientSocketMap.get(socket.id);
    const deletedUser = [{ username, sub }];
    this.clientSocketMap.delete(socket.id);
    this.logger.warn(`Disconnected client: ${socket.id}`, ' MessageGateway');
    this.clientSocketMap.forEach(({ socket }) => {
      socket.emit('disconnectedUser', deletedUser);
    });
  }
}

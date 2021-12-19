"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const messanges_service_1 = require("../modules/messanges/messanges.service");
const jwt = require("jsonwebtoken");
const common_1 = require("@nestjs/common");
let MessagesGateway = class MessagesGateway {
    constructor(messangesService) {
        this.messangesService = messangesService;
        this.clientSocketMap = new Map();
        this.logger = new common_1.Logger('MessageGateway');
        this.messangesService.attachSender((message) => {
            this.clientSocketMap.forEach(({ username, socket }) => {
                if (username === message.user.username ||
                    username === message.toUser.username) {
                    socket.emit('message', message);
                }
            });
        });
    }
    async handleMeassage(socket, payload) {
        try {
            const { username, sub, exp } = jwt.verify(payload === null || payload === void 0 ? void 0 : payload.accessToken, process.env.SECRET);
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
                if (currentUser[0].sub !== sub)
                    socket.emit('newUser', currentUser);
            });
            this.logger.warn(`connected and stored client: ${socket.id}`, ' MessageGateway');
        }
        catch (error) {
            return {
                event: 'auth-ed',
                data: {
                    success: false,
                    message: error.message,
                },
            };
        }
        return {
            event: 'auth-ed',
            data: { success: true },
        };
    }
    handleConnection(socket) {
        const values = [
            ...this.clientSocketMap.values(),
        ];
        const onUsers = values.map((elem) => {
            const newElem = { username: elem.username, sub: elem.sub };
            return newElem;
        });
        socket.emit('getAllConnectUsers', onUsers);
    }
    handleDisconnect(socket) {
        try {
            const { username, sub } = this.clientSocketMap.get(socket.id);
            const deletedUser = [{ username, sub }];
            this.clientSocketMap.delete(socket.id);
            this.logger.warn(`Disconnected client: ${socket.id}`, ' MessageGateway');
            this.clientSocketMap.forEach(({ socket }) => {
                socket.emit('disconnectedUser', deletedUser);
            });
        }
        catch (error) {
            return {
                event: 'auth-ed',
                data: {
                    success: false,
                    message: error.message,
                },
            };
        }
    }
};
__decorate([
    websockets_1.SubscribeMessage('auth-te'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], MessagesGateway.prototype, "handleMeassage", null);
MessagesGateway = __decorate([
    websockets_1.WebSocketGateway(),
    __metadata("design:paramtypes", [messanges_service_1.MessangesService])
], MessagesGateway);
exports.MessagesGateway = MessagesGateway;
//# sourceMappingURL=messages.gateway.js.map
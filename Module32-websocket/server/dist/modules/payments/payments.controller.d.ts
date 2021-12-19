import { Request } from 'express';
import { HttpService } from '@nestjs/axios';
import { UsersService } from '../users/users.service';
import { CreatePaymentDto } from './dto/createPayment.dto';
export declare class PaymentsController {
    private usersService;
    private readonly http;
    constructor(usersService: UsersService, http: HttpService);
    sessionKey(): Promise<any>;
    create({ amount, toUserId }: CreatePaymentDto, req: Request): Promise<{
        paymentSessionKey: any;
        currentUser: {
            username: string;
            bdayDate: string;
            email: string;
            phone: string;
            passport: string;
            passDate: string;
            passOrg: string;
            passOrgCode: string;
            licenseNumber: string;
            dateLicense: string;
            pass: string;
            cardNumber: string;
            cardName: string;
            cardExpiry: string;
            cardCvc: string;
            _id?: string;
        };
        toUser: import("../users/entities/user.entity").User;
    }>;
    checkPaymentStatus(paymentSessionKey: string): Promise<{
        paymentStatus: any;
    }>;
}

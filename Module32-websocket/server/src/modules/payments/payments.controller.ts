import { Request } from 'express';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserDto } from '../users/DTO/user.dto';
import { UsersService } from '../users/users.service';
import { CreatePaymentDto } from './dto/createPayment.dto';
import { firstValueFrom, Observable } from 'rxjs';

@Controller('payments')
export class PaymentsController {
  constructor(
    private usersService: UsersService,
    private readonly http: HttpService,
  ) {}

  @Get('test')
  async sessionKey() {
    const pyamentGatewayRawResponse: Observable<AxiosResponse<any>> =
      this.http.post(
        `${process.env.PAYMENT_SERVER}/transfers`,
        {
          to: 'fe51a66c-05f0-49ef-afb9-e65f18a90d8a',
          amount: 100,
          from: '6746a6d3-8824-4c84-a295-bb6eedb22bf8',
          cardNumber: '0000-0000-0000-0000',
          cardName: 'Max',
          cardExpiry: '10.10.2030',
          cardCvc: '777',
        },
        {
          headers: {
            authorization: `Bearer ${process.env.BANK_SECRET_KEY}`,
          },
        },
      );

    const dataPaymentResponse = await firstValueFrom(pyamentGatewayRawResponse);

    return dataPaymentResponse.data;
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() { amount, toUserId }: CreatePaymentDto,
    @Req() req: Request,
  ) {
    const user = req.user as UserDto;

    //Для тренировки платежей
    const currentUser = {
      cardName: 'Tom York',
      cardNumber: '0000-0000-0000-0000',
      cardExpiry: '10.10.2030',
      cardCvc: '777',
      ...user,
    };

    const toUser = await this.usersService.getOneUser(toUserId);

    const pyamentGatewayRawResponse: Observable<AxiosResponse<any>> =
      this.http.post(
        `${process.env.PAYMENT_SERVER}/transfers`,
        {
          to: toUser._id,
          amount: Number(amount),
          from: currentUser._id,
          cardNumber: currentUser.cardNumber,
          cardName: currentUser.cardName,
          cardExpiry: currentUser.cardExpiry,
          cardCvc: currentUser.cardCvc,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.BANK_SECRET_KEY}`,
          },
        },
      );

    const paymentData = await firstValueFrom(pyamentGatewayRawResponse);
    const paymentSessionKey = paymentData.data.paymentSessionKey;

    return {
      paymentSessionKey,
      currentUser,
      toUser,
    };
  }

  @Get('check-status')
  @UseGuards(JwtAuthGuard)
  async checkPaymentStatus(
    @Query('paymentSessionKey') paymentSessionKey: string,
  ) {
    if (!paymentSessionKey) {
      throw new HttpException(
        'paymentSessionKey not found',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    const checkPaymentStatusFullRespose: Observable<AxiosResponse<any>> =
      this.http.get(`${process.env.PAYMENT_SERVER}/transfers/check-status`, {
        headers: {
          authorization: `Bearer ${process.env.BANK_SECRET_KEY}`,
        },
        params: {
          paymentSessionKey,
        },
      });
    const checkPaymentStatusResponse = await firstValueFrom(
      checkPaymentStatusFullRespose,
    );
    const paymentStatus = checkPaymentStatusResponse.data.transferStatus;
    console.log(paymentStatus);

    return { paymentStatus };
  }
}

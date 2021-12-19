import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsString()
  amount: string;
  @IsNotEmpty()
  @IsUUID()
  toUserId: string;
}

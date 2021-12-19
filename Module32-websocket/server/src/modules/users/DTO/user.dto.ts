import { IsEmail, IsNotEmpty, Length, MinLength } from 'class-validator';

export class UserDto {
  @MinLength(5, {
    message: 'username is too short',
  })
  username: string;
  @IsNotEmpty()
  bdayDate: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  phone: string;
  @IsNotEmpty()
  passport: string;
  @IsNotEmpty()
  passDate: string;
  @IsNotEmpty()
  passOrg: string;
  @IsNotEmpty()
  passOrgCode: string;
  @IsNotEmpty()
  licenseNumber: string;
  @IsNotEmpty()
  dateLicense: string;
  @Length(5, 15)
  pass: string;
  cardNumber?: string;
  cardName?: string;
  cardExpiry?: string;
  cardCvc?: string;
  _id?: string;
}

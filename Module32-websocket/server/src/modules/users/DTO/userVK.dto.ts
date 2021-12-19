import { IsNotEmpty } from 'class-validator';

export class UserVKDto {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  uid: number;
}

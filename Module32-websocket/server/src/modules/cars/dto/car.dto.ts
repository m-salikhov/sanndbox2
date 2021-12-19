import { ApiProperty } from '@nestjs/swagger';

export class CarDto {
  @ApiProperty()
  brand: string;
  @ApiProperty()
  model: string;
  @ApiProperty()
  number: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  city: string;
  @ApiProperty()
  photo: string;
  @ApiProperty()
  type: string;
}

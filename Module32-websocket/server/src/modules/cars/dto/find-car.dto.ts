import { ApiProperty } from '@nestjs/swagger';

export class FindCarsDto {
  @ApiProperty()
  city: string;
  @ApiProperty()
  type: string;
}

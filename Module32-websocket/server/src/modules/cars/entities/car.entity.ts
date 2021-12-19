import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Car {
  @ApiProperty()
  @ObjectIdColumn()
  _id: string;
  @ApiProperty()
  @Column()
  brand: string;
  @ApiProperty()
  @Column()
  model: string;
  @ApiProperty()
  @Column()
  type: string;
  @ApiProperty()
  @Column()
  number: string;
  @ApiProperty()
  @Column()
  price: number;
  @ApiProperty()
  @Column()
  city: string;
  @ApiProperty()
  @Column()
  photo: string;
  @ApiProperty()
  @Column()
  bookedInfo: {
    booked: boolean;
    date: {
      startDate: string;
      endDate: string;
    };
  };
}

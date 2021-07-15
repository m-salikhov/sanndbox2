/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Car {
  @ObjectIdColumn()
  @Field()
  _id: string;
  @Column()
  @Field()
  brand: string;
  @Column()
  @Field()
  model: string;
  @Column()
  @Field()
  type: string;
  @Column()
  @Field()
  number: string;
  @Column()
  @Field(() => Int)
  price: number;
  @Column()
  @Field()
  city: string;
  @Column()
  @Field()
  photo: string;
}

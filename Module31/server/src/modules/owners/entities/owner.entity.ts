import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Owner {
  @ObjectIdColumn()
  @Field()
  _id: string;
  @Column()
  @Field()
  name: string;
  @Column()
  @Field()
  bdayDate: string;
  @Column()
  @Field()
  email: string;
  @Column()
  @Field()
  phone: string;
  @Column()
  @Field()
  passport: string;
  @Column()
  @Field()
  pass: string;
  @Column()
  @Field()
  passRepeat: string;
}

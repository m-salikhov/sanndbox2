import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class User {
  @ObjectIdColumn()
  @Field()
  _id: string;
  @Column()
  @Field()
  username: string;
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
  passDate: string;
  @Column({ nullable: true })
  @Field({ nullable: true })
  passOrg?: string;
  @Column()
  @Field()
  passOrgCode: string;
  @Column()
  @Field()
  licenseNumber: string;
  @Column()
  @Field()
  dateLicense: string;
  @Column()
  @Field()
  pass: string;
  @Column()
  @Field()
  passRepeat: string;
}

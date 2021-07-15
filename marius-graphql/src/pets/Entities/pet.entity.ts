import { Field, ObjectType } from '@nestjs/graphql';
import { Owner } from '../../owners/entities/owner.entity';
import { Column, Entity, ManyToOne, ObjectIdColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Pet {
  @ObjectIdColumn()
  @Field()
  _id: string;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  type?: string;

  @Column()
  @Field()
  ownerID: string;

  @ManyToOne(() => Owner, (owner) => owner.pets)
  @Field((type) => Owner)
  owner: Owner;
}

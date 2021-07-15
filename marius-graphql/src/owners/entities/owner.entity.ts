/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType } from '@nestjs/graphql';
import { Pet } from 'src/pets/Entities/pet.entity';
import { Column, Entity, ObjectIdColumn, OneToMany } from 'typeorm';

@Entity()
@ObjectType()
export class Owner {
  @ObjectIdColumn()
  @Field()
  _id: string;

  @Column()
  @Field()
  name: string;

  @OneToMany((type) => Pet, (pet) => pet.owner)
  @Field((type) => [Pet], { nullable: true })
  pets?: Pet[];
}

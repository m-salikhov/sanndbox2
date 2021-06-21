import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Car {
  @ObjectIdColumn()
  _id: string;
  @Column()
  brand: string;
  @Column()
  model: string;
  @Column()
  number: string;
}

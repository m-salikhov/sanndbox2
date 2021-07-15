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
  type: string;
  @Column()
  number: string;
  @Column()
  price: number;
  @Column()
  city: string;
  @Column()
  photo: string;
}

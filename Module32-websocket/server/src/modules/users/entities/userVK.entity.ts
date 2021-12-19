import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class UserVK {
  @ObjectIdColumn()
  _id: string;
  @Column()
  username: string;
  @Column()
  uid: number;
}

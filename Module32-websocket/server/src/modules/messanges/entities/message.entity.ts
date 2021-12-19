import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Message {
  @ObjectIdColumn()
  _id: string;
  @Column()
  user: {
    _id: string;
    username: string;
  };
  @Column()
  toUser: {
    _id: string;
    username: string;
    email: string;
  };
  @Column()
  body: string;
  @Column()
  createdAt: number = Date.now();
}

import { User } from 'src/modules/users/entities/user.entity';
import { Column, Entity, ManyToOne, ObjectIdColumn } from 'typeorm';

@Entity()
export class Message {
  @ObjectIdColumn()
  _id: string;
  @ManyToOne(() => User)
  user: User;
  @ManyToOne(() => User)
  toUser: User;
  @Column()
  body: string;
  @Column()
  createdAt: number = Date.now();
}

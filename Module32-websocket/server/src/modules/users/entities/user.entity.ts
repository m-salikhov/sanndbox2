import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: string;
  @Column()
  username!: string;
  @Column({ default: '01.01.2001' })
  bdayDate: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @Column()
  passport: string;
  @Column()
  passDate: string;
  @Column()
  passOrg: string;
  @Column()
  passOrgCode: string;
  @Column()
  licenseNumber: string;
  @Column()
  dateLicense: string;
  @Column()
  pass: string;
}

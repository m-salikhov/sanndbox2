import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: string;
  @Column()
  name: string;
  @Column()
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
  @Column()
  passRepeat: string;
}

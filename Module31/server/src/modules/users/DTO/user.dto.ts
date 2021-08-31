import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserDto {
  @Field()
  username: string;
  @Field()
  bdayDate: string;
  @Field()
  email: string;
  @Field()
  phone: string;
  @Field()
  passport: string;
  @Field()
  passDate: string;
  @Field({ nullable: true })
  passOrg?: string;
  @Field()
  passOrgCode: string;
  @Field()
  licenseNumber: string;
  @Field()
  dateLicense: string;
  @Field()
  pass: string;
  @Field()
  passRepeat: string;
}

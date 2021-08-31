import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class OwnerDto {
  @Field()
  name: string;
  @Field()
  bdayDate: string;
  @Field()
  email: string;
  @Field()
  phone: string;
  @Field()
  passport: string;
  @Field()
  pass: string;
  @Field()
  passRepeat: string;
}

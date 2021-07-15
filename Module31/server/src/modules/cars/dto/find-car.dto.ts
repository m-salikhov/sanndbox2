import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindCarsDto {
  @Field()
  city: string;
  @Field()
  type: string;
}

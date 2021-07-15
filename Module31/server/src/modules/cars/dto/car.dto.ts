import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CarDto {
  @Field()
  brand: string;
  @Field()
  model: string;
  @Field()
  number: string;
  @Field()
  price: number;
  @Field()
  city: string;
  @Field()
  photo: string;
  @Field()
  type: string;
}

import { CreateCitizenInput } from './create-citizen.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCitizenInput {
  @Field()
  id: string;

  @Field()
  firstName: string

  @Field()
  lastName: string

  @Field()
  email: string

  @Field()
  password: string

  @Field()
  address_1: string

  @Field()
  address_2: string
}
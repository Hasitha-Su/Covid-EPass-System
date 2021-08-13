import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCitizenInput {

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

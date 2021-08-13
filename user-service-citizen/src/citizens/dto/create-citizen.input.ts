import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCitizenInput {

  @Field()
  firstName: string

  @Field()
  lastName: string

}

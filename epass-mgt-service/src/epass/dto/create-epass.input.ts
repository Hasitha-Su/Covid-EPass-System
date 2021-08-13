import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEpassInput {

  @Field()
  name: string

  @Field()
  citizenId: string;

}

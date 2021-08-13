import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEpassInput {

  @Field()
  category: string

  @Field()
  status: string

  @Field()
  citizenId: string;

}

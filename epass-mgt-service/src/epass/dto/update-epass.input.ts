import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEpassInput{
  @Field()
  id: string;

  @Field()
  name: string;
}
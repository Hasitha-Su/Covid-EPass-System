import { CreateCitizenInput } from './create-citizen.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCitizenInput{
  @Field()
  id: string;

  @Field()
  firstName: string

  @Field()
  lastName: string
}
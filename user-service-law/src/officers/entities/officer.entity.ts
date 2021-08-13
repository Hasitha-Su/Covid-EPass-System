import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Officer {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

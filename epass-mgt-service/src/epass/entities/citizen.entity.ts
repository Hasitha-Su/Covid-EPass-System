import { Directive, ObjectType, Field, ID } from '@nestjs/graphql';
import { Epass } from './epass.entity';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Citizen {
  @Field((type) => ID)
  @Directive('@external')
  id: string;

  @Field((type) => [Epass])
  epasses?: Epass[];
}
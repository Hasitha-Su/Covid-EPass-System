import { ObjectType, Field, Int, ID, Directive } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Directive('@key(fields: "id")')
@Entity()
export class Citizen {
  @Field((type)=> ID)
  @Column()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  firstName: string

  @Field()
  @Column()
  lastName: string

}
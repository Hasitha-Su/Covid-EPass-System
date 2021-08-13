import { ObjectType, Field, Int, ID, Directive } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Citizen } from './Citizen.entity';

@ObjectType()
@Directive('@key(fields:"id")')
@Entity()
export class Epass {

  @Field((type)=> ID)
  @Column()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  category: string

  @Field()
  @Column()
  status: string

  @Field()
  @Column()
  citizenId: string;

  @Field((type) => Citizen)
  citizen?: Citizen;
}
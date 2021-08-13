import { Resolver, Query, Mutation, Args, Int, ResolveReference, ResolveField, Parent } from '@nestjs/graphql';
import { EpassService } from './epass.service';
import { Epass } from './entities/epass.entity';
import { CreateEpassInput } from './dto/create-epass.input';
import { UpdateEpassInput } from './dto/update-epass.input';
import { Citizen } from './entities/Citizen.entity';

@Resolver(() => Epass)
export class EpassResolver {
  constructor(private readonly epassService: EpassService) {}

  @Mutation(() => Epass)
  createEpass(@Args('createEpassInput') createEpassInput: CreateEpassInput) {
    return this.epassService.create(createEpassInput);
  }

  @Query(() => [Epass], { name: 'getAllEpass' })
  findAll() {
    return this.epassService.find();
  }

  @Query(() => Epass, { name: 'findEpassById' })
  findOne(@Args('id') id: string) {
    return this.epassService.findOne(id);
  }

  @Mutation(() => Epass)
  updateEpass(@Args('updateEpassInput') updateEpassInput: UpdateEpassInput) {
    return this.epassService.update(updateEpassInput.id, updateEpassInput);
  }

  @Mutation(() => Epass)
  removeEpass(@Args('id') id: string) {
    return this.epassService.remove(id);
  }

  @ResolveField((of) => Citizen)
  citizen(@Parent() epass: Epass): any {
    return { __typename: 'Citizen', id: epass.citizenId };
  }
}
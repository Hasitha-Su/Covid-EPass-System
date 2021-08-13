import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField, ResolveReference } from '@nestjs/graphql';
import { CitizensService } from './citizens.service';
import { Citizen } from './entities/citizen.entity';
import { CreateCitizenInput } from './dto/create-citizen.input';
import { UpdateCitizenInput } from './dto/update-citizen.input';

@Resolver(() => Citizen)
export class CitizensResolver {
  constructor(private citizensService: CitizensService) {}

  @Mutation(() => Citizen, {name: "CreateCitizen"})
  create(@Args('citizenCreateDto') createCitizenInput: CreateCitizenInput) {
    return this.citizensService.create(createCitizenInput);
  }

  @Query(() => [Citizen], {name: "getAllCitizens"})
  findAll() {
    return this.citizensService.findAll();
  }

  @Query(() => Citizen, { name: 'citizen' })
  findOne(@Args('id') id: string) {
    return this.citizensService.findOne(id);
  }

  @Mutation(() => Citizen, {name: "UpdateCitizen"})
  update(@Args('updateCitizenDto') updateCitizenInput: UpdateCitizenInput) {
    return this.citizensService.update(updateCitizenInput.id, updateCitizenInput);
  }

  @Mutation(() => Citizen)
  removeCitizen(@Args('id') id: string) {
    return this.citizensService.remove(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string, id: string }) {
    return this.citizensService.findOne(reference.id)
  }

}
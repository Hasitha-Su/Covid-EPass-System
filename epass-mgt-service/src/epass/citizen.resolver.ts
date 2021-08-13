import { Parent, ResolveField, Resolver } from '@nestjs/graphql';

import { EpassService } from './epass.service';
import { Epass } from './entities/epass.entity';
import { Citizen } from './entities/Citizen.entity';

@Resolver((of) => Citizen)
export class CitizenResolvers {
  constructor(private readonly epassService: EpassService) {}

  @ResolveField((of) => [Epass])
  public epasses(@Parent() citizen: Citizen): Promise<Epass[]> {
    return this.epassService.forCitizen(citizen.id);
  }
}
import { Test, TestingModule } from '@nestjs/testing';
import { CitizensResolver } from './citizens.resolver';
import { CitizensService } from './citizens.service';

describe('CitizensResolver', () => {
  let resolver: CitizensResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitizensResolver, CitizensService],
    }).compile();

    resolver = module.get<CitizensResolver>(CitizensResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

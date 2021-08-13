import { Module } from '@nestjs/common';
import { CitizensService } from './citizens.service';
import { CitizensResolver } from './citizens.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Citizen } from './entities/citizen.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Citizen])],
  providers: [CitizensResolver, CitizensService]
})
export class CitizensModule {}

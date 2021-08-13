import { Module } from '@nestjs/common';
import { EpassService } from './epass.service';
import { EpassResolver } from './epass.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Epass } from './entities/epass.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Epass])],
  providers: [EpassResolver, EpassService],
  exports: [EpassService]
})
export class EpassModule {}

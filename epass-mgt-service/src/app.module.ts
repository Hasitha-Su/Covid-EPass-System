import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { EpassModule } from './epass/epass.module';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Citizen } from './epass/entities/Citizen.entity';
import { CitizenResolvers } from './epass/citizen.resolver';

@Module({
  imports: [
    EpassModule,
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
      buildSchemaOptions: {
        orphanedTypes: [Citizen],
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'test',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [EpassModule, CitizenResolvers],
})

export class AppModule {}
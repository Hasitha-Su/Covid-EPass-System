import { Module } from '@nestjs/common';
import { OfficersModule } from './officers/officers.module';

@Module({
  imports: [OfficersModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
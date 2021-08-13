import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaffResolver } from './staff/staff.resolver';
import { StaffModule } from './staff/staff.module';

@Module({
  imports: [StaffModule],
  controllers: [AppController],
  providers: [AppService, StaffResolver],
})
export class AppModule {}

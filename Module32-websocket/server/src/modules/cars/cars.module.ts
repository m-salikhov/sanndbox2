import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { CarsRepo } from './repo/cars.repo';
@Module({
  imports: [AuthModule],
  controllers: [CarsController],
  providers: [CarsService, CarsRepo],
})
export class CarsModule {}

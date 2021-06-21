import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { CarsRepo } from './repo/cars.repo';

@Module({
  controllers: [CarsController],
  providers: [CarsService, CarsRepo],
})
export class CarsModule {}

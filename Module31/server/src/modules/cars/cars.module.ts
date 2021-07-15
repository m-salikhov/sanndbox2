import { Module } from '@nestjs/common';
import { CarsResolver } from './cars.resolver';
import { CarsService } from './cars.service';
import { CarsRepo } from './repo/cars.repo';

@Module({
  providers: [CarsService, CarsRepo, CarsResolver],
})
export class CarsModule {}

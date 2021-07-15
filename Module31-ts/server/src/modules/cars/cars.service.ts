import { Injectable } from '@nestjs/common';
import { CarDto } from './dto/car.dto';
import { FindCarsDto } from './dto/find-car.dto';
import { Car } from './entities/car.entity';
import { CarsRepo } from './repo/cars.repo';

@Injectable()
export class CarsService {
  constructor(private carsRepo: CarsRepo) {}

  async createCar(carDto: CarDto) {
    return await this.carsRepo.createCar(carDto);
  }

  async getAll(): Promise<Car[]> {
    return await this.carsRepo.getAll();
  }

  async getOne(id: string): Promise<Car> {
    return await this.carsRepo.getOne(id);
  }

  async getSomeCars(findCarsDto: FindCarsDto) {
    return await this.carsRepo.getSomeCars(findCarsDto);
  }
}

import { Injectable } from '@nestjs/common';
import { CarDto } from './dto/car.dto';
import { CarsRepo } from './repo/cars.repo';

@Injectable()
export class CarsService {
  constructor(private carsRepo: CarsRepo) {}

  async createCar(car: CarDto) {
    return await this.carsRepo.createCar(car);
  }

  async findAll() {
    return await this.carsRepo.getAll();
  }

  async getOne(id: string) {
    return await this.carsRepo.getOne(id);
  }
}

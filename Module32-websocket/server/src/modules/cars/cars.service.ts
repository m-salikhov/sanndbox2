import { Injectable } from '@nestjs/common';
import { CarDto } from './dto/car.dto';
import { FindCarsDto } from './dto/find-car.dto';
import { Car } from './entities/car.entity';
import { CarsRepo } from './repo/cars.repo';

@Injectable()
export class CarsService {
  constructor(private carsRepo: CarsRepo) {}

  async createCar(createCarDto: CarDto): Promise<Car> {
    return await this.carsRepo.createCar(createCarDto);
  }

  async findAll() {
    return await this.carsRepo.getAll();
  }

  async getOne(id: string) {
    return await this.carsRepo.getOne(id);
  }

  async getSomeCars(findCarsDto: FindCarsDto) {
    return await this.carsRepo.getSomeCars(findCarsDto);
  }

  async updateCar(id: string, updateCarDto: CarDto) {
    return await this.carsRepo.updateCar(id, updateCarDto);
  }
}

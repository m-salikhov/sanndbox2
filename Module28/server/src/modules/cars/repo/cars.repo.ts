import { Injectable } from '@nestjs/common';
import { getMongoRepository } from 'typeorm';

import { v4 as uuid } from 'uuid';
import { FindCarsDto } from '../dto/find-car.dto';
import { Car } from '../entities/car.entity';

@Injectable()
export class CarsRepo {
  async createCar(car: Car) {
    const repository = getMongoRepository(Car);
    const newCar = { ...car, _id: uuid() };
    return await repository.save(newCar);
  }

  async getAll() {
    const repository = getMongoRepository(Car);
    return await repository.find();
  }

  async getOne(id: string) {
    const repository = getMongoRepository(Car);
    return await repository.findOne({ _id: id });
  }

  async getSomeCars(findCars: FindCarsDto) {
    const repository = getMongoRepository(Car);
    return await repository.find({
      where: {
        city: { $eq: findCars.city },
        type: { $eq: findCars.type },
      },
    });
  }
}

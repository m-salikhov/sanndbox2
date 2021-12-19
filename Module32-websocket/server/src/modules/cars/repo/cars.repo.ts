import { Injectable } from '@nestjs/common';
import { getMongoRepository } from 'typeorm';

import { v4 as uuid } from 'uuid';
import { CarDto } from '../dto/car.dto';
import { FindCarsDto } from '../dto/find-car.dto';
import { Car } from '../entities/car.entity';

@Injectable()
export class CarsRepo {
  async createCar(car: CarDto) {
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

  async updateCar(id: string, updateCarDto: CarDto) {
    const repository = getMongoRepository(Car);
    return await repository.findOneAndUpdate(
      { _id: id },
      //Чтобы поменять свойство глубже первого уровня писать в кавычкaх, например 'bookedInfo.date.startDate'
      { $set: { bookedInfo: updateCarDto } },
      { returnOriginal: false },
    );
  }
}

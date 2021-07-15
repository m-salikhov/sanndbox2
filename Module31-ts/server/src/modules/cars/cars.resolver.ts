import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { CarDto } from './dto/car.dto';
import { FindCarsDto } from './dto/find-car.dto';
import { Car } from './entities/car.entity';

@Resolver(() => Car)
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query(() => [Car])
  cars(): Promise<Car[]> {
    return this.carsService.getAll();
  }

  @Query(() => [Car])
  someCars(@Args('findCarsDto') findCarsDto: FindCarsDto): Promise<Car[]> {
    return this.carsService.getSomeCars(findCarsDto);
  }

  @Query(() => Car)
  getOneCar(@Args('id') id: string): Promise<Car> {
    return this.carsService.getOne(id);
  }

  @Mutation(() => Car)
  createCar(@Args('carDto') carDto: CarDto) {
    return this.carsService.createCar(carDto);
  }
}

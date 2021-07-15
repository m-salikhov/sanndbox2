import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarDto } from './dto/car.dto';
import { FindCarsDto } from './dto/find-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  findAll(): Promise<CarDto[]> {
    return this.carsService.findAll();
  }

  @Post()
  createNewUser(@Body() createCarDto: CarDto): Promise<CarDto> {
    return this.carsService.createCar(createCarDto);
  }

  @Get(':id')
  getOne(@Param() params) {
    return this.carsService.getOne(params.id);
  }

  @Post('/somecars')
  getSomeCars(@Body() findCarsDto: FindCarsDto): Promise<CarDto[]> {
    return this.carsService.getSomeCars(findCarsDto);
  }
}

import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarDto } from './dto/car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  findAll(): Promise<CarDto[]> {
    return this.carsService.findAll();
  }

  @Post()
  createNewUser(@Body() createUserDto: CarDto): Promise<CarDto> {
    return this.carsService.createCar(createUserDto);
  }

  @Get(':id')
  getOne(@Param() params) {
    return this.carsService.getOne(params.id);
  }
}

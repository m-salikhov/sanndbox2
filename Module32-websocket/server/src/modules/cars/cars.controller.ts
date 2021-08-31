import { Body, Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CarsService } from './cars.service';
import { CarDto } from './dto/car.dto';
import { FindCarsDto } from './dto/find-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Post('/somecars')
  getSomeCars(@Body() findCarsDto: FindCarsDto): Promise<CarDto[]> {
    return this.carsService.getSomeCars(findCarsDto);
  }
}

import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  UseGuards,
  Put,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CarsService } from './cars.service';
import { CarDto } from './dto/car.dto';
import { FindCarsDto } from './dto/find-car.dto';
import { Car } from './entities/car.entity';

@ApiTags('cars')
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Get All Cars succesfully',
    type: [Car],
  })
  @ApiInternalServerErrorResponse({
    description: 'Iternal server error',
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }

  @ApiOkResponse({
    description: 'Post Car succesfully',
    type: Car,
  })
  @Post()
  @ApiBody({ type: CarDto })
  createNewCar(@Body() createCarDto: CarDto): Promise<Car> {
    return this.carsService.createCar(createCarDto);
  }

  @ApiOkResponse({
    description: 'Get Car succesfully',
    type: Car,
  })
  @ApiInternalServerErrorResponse({
    description: 'Iternal server error',
  })
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.carsService.getOne(id);
  }

  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Get some cars succesfully',
    type: [Car],
  })
  @UseGuards(JwtAuthGuard)
  @Post('/somecars')
  getSomeCars(@Body() findCarsDto: FindCarsDto): Promise<Car[]> {
    return this.carsService.getSomeCars(findCarsDto);
  }

  @Put(':id')
  updateCar(@Param('id') id: string, @Body() updateCarDto: CarDto) {
    return this.carsService.updateCar(id, updateCarDto);
  }
}

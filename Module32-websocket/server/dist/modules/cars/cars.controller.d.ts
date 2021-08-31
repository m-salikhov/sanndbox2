import { CarsService } from './cars.service';
import { CarDto } from './dto/car.dto';
import { FindCarsDto } from './dto/find-car.dto';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    findAll(): Promise<CarDto[]>;
    createNewUser(createCarDto: CarDto): Promise<CarDto>;
    getOne(params: any): Promise<import("./entities/car.entity").Car>;
    getSomeCars(findCarsDto: FindCarsDto): Promise<CarDto[]>;
}

import { CarsService } from './cars.service';
import { CarDto } from './dto/car.dto';
import { FindCarsDto } from './dto/find-car.dto';
import { Car } from './entities/car.entity';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    findAll(): Promise<Car[]>;
    createNewCar(createCarDto: CarDto): Promise<Car>;
    getOne(id: string): Promise<Car>;
    getSomeCars(findCarsDto: FindCarsDto): Promise<Car[]>;
    updateCar(id: string, updateCarDto: CarDto): Promise<import("typeorm").FindAndModifyWriteOpResultObject>;
}

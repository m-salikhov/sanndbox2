import { CarDto } from './dto/car.dto';
import { FindCarsDto } from './dto/find-car.dto';
import { Car } from './entities/car.entity';
import { CarsRepo } from './repo/cars.repo';
export declare class CarsService {
    private carsRepo;
    constructor(carsRepo: CarsRepo);
    createCar(createCarDto: CarDto): Promise<Car>;
    findAll(): Promise<Car[]>;
    getOne(id: string): Promise<Car>;
    getSomeCars(findCarsDto: FindCarsDto): Promise<Car[]>;
    updateCar(id: string, updateCarDto: CarDto): Promise<import("typeorm").FindAndModifyWriteOpResultObject>;
}

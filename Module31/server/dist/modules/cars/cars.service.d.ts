import { CarDto } from './dto/car.dto';
import { FindCarsDto } from './dto/find-car.dto';
import { Car } from './entities/car.entity';
import { CarsRepo } from './repo/cars.repo';
export declare class CarsService {
    private carsRepo;
    constructor(carsRepo: CarsRepo);
    createCar(carDto: CarDto): Promise<{
        _id: any;
        brand: string;
        model: string;
        number: string;
        price: number;
        city: string;
        photo: string;
        type: string;
    } & Car>;
    getAll(): Promise<Car[]>;
    getOne(id: string): Promise<Car>;
    getSomeCars(findCarsDto: FindCarsDto): Promise<Car[]>;
}

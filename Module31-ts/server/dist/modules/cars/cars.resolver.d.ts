import { CarsService } from './cars.service';
import { CarDto } from './dto/car.dto';
import { FindCarsDto } from './dto/find-car.dto';
import { Car } from './entities/car.entity';
export declare class CarsResolver {
    private carsService;
    constructor(carsService: CarsService);
    cars(): Promise<Car[]>;
    someCars(findCarsDto: FindCarsDto): Promise<Car[]>;
    getOneCar(id: string): Promise<Car>;
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
}

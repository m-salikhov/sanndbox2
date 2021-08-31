import { CarDto } from './dto/car.dto';
import { FindCarsDto } from './dto/find-car.dto';
import { CarsRepo } from './repo/cars.repo';
export declare class CarsService {
    private carsRepo;
    constructor(carsRepo: CarsRepo);
    createCar(car: CarDto): Promise<{
        _id: any;
        brand: string;
        model: string;
        type: string;
        number: string;
        price: number;
        city: string;
        photo: string;
    } & import("./entities/car.entity").Car>;
    findAll(): Promise<import("./entities/car.entity").Car[]>;
    getOne(id: string): Promise<import("./entities/car.entity").Car>;
    getSomeCars(findCarsDto: FindCarsDto): Promise<import("./entities/car.entity").Car[]>;
}

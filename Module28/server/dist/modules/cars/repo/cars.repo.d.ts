import { FindCarsDto } from '../dto/find-car.dto';
import { Car } from '../entities/car.entity';
export declare class CarsRepo {
    createCar(car: Car): Promise<{
        _id: any;
        brand: string;
        model: string;
        type: string;
        number: string;
        price: number;
        city: string;
        photo: string;
    } & Car>;
    getAll(): Promise<Car[]>;
    getOne(id: string): Promise<Car>;
    getSomeCars(findCars: FindCarsDto): Promise<Car[]>;
}

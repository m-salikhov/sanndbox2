import { CarDto } from '../dto/car.dto';
import { FindCarsDto } from '../dto/find-car.dto';
import { Car } from '../entities/car.entity';
export declare class CarsRepo {
    createCar(car: CarDto): Promise<{
        _id: string;
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
    getSomeCars(findCars: FindCarsDto): Promise<Car[]>;
    updateCar(id: string, updateCarDto: CarDto): Promise<import("typeorm").FindAndModifyWriteOpResultObject>;
}

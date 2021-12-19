export declare class Car {
    _id: string;
    brand: string;
    model: string;
    type: string;
    number: string;
    price: number;
    city: string;
    photo: string;
    bookedInfo: {
        booked: boolean;
        date: {
            startDate: string;
            endDate: string;
        };
    };
}

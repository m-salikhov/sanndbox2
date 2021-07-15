import { Owner } from '../../owners/entities/owner.entity';
export declare class Pet {
    _id: string;
    name: string;
    type?: string;
    ownerID: string;
    owner: Owner;
}

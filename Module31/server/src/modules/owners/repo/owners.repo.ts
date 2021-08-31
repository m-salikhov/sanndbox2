import { Injectable } from '@nestjs/common';
import { getMongoRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { OwnerDto } from '../dto/owner.dto';
import { Owner } from '../entities/owner.entity';

@Injectable()
export class OwnersRepo {
  async createOwner(ownerDto: OwnerDto) {
    const repository = getMongoRepository(Owner);
    const newOwner = { ...ownerDto, _id: uuid() };
    return await repository.save(newOwner);
  }

  async getAllOwners() {
    const repository = getMongoRepository(Owner);
    return await repository.find();
  }

  async getOneOwner(id: string) {
    const repository = getMongoRepository(Owner);
    return await repository.findOne({ _id: id });
  }
}

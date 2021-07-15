import { Injectable } from '@nestjs/common';
import { CreateOwnerInput } from 'src/owners/dto/create-owner.input';
import { Owner } from 'src/owners/entities/owner.entity';
import { getMongoRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class OwnersRepo {
  async createOwner(createOwnerInput: CreateOwnerInput) {
    const repository = getMongoRepository(Owner);
    const newOwner = { ...createOwnerInput, _id: uuid() };
    return await repository.save(newOwner);
  }

  async getAll() {
    const repository = getMongoRepository(Owner);
    return await repository.find();
  }

  async findOne(id: string) {
    const repository = getMongoRepository(Owner);
    return await repository.findOne({ _id: id });
  }
}

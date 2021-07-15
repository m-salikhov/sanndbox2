import { Injectable } from '@nestjs/common';
import { OwnersRepo } from 'src/repository/owner.repo';
import { CreateOwnerInput } from './dto/create-owner.input';
import { Owner } from './entities/owner.entity';
// import { UpdateOwnerInput } from './dto/update-owner.input';
// import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {
  constructor(private ownersRepo: OwnersRepo) {}

  create(createOwnerInput: CreateOwnerInput) {
    return this.ownersRepo.createOwner(createOwnerInput);
  }

  findAll() {
    return this.ownersRepo.getAll();
  }

  findOne(id: string): Promise<Owner> {
    return this.ownersRepo.findOne(id);
  }

  // update(id: number, updateOwnerInput: UpdateOwnerInput) {
  //   return `This action updates a #${id} owner`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} owner`;
  // }
}

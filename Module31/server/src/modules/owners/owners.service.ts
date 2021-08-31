import { Injectable } from '@nestjs/common';
import { OwnerDto } from './dto/owner.dto';
import { Owner } from './entities/owner.entity';
import { OwnersRepo } from './repo/owners.repo';

@Injectable()
export class OwnersService {
  constructor(private ownersRepo: OwnersRepo) {}

  createOwner(ownerDto: OwnerDto) {
    return this.ownersRepo.createOwner(ownerDto);
  }

  findAllOwners(): Promise<Owner[]> {
    return this.ownersRepo.getAllOwners();
  }

  getOneOwner(id: string): Promise<Owner> {
    return this.ownersRepo.getOneOwner(id);
  }
}

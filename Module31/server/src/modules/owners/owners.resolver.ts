import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OwnerDto } from './dto/owner.dto';
import { Owner } from './entities/owner.entity';
import { OwnersService } from './owners.service';

@Resolver(() => Owner)
export class OwnersResolver {
  constructor(private ownersService: OwnersService) {}

  @Query(() => [Owner])
  owners(): Promise<Owner[]> {
    return this.ownersService.findAllOwners();
  }

  @Query(() => Owner)
  getOneOwner(@Args('id') id: string): Promise<Owner> {
    return this.ownersService.getOneOwner(id);
  }

  @Mutation(() => Owner)
  createOwner(@Args('ownerDto') ownerDto: OwnerDto) {
    return this.ownersService.createOwner(ownerDto);
  }
}

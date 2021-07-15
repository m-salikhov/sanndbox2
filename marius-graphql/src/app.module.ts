import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config/keys';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { Pet } from './pets/Entities/pet.entity';
import { OwnersModule } from './owners/owners.module';
import { Owner } from './owners/entities/owner.entity';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mongodb',
      url: config.mongoURI,
      entities: [Pet, Owner],
      useUnifiedTopology: true,
    }),
    PetsModule,
    OwnersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

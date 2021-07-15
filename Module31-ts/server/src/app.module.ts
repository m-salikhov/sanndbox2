import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { CarsModule } from './modules/cars/cars.module';
import config from './config/keys';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mongodb',
      url: config.mongoURI,
      entities: [`${__dirname}/**/*.entity.{js,ts}`],
      useUnifiedTopology: true,
    }),
    UsersModule,
    CarsModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { CarsModule } from './modules/cars/cars.module';
import config from './config/keys';

@Module({
  imports: [
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

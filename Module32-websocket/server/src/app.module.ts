import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { CarsModule } from './modules/cars/cars.module';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MessangesModule } from './modules/messanges/messanges.module';
import { PaymentsModule } from './modules/payments/payments.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mongodb',
      url: process.env.MONGO_URI,
      entities: [`${__dirname}/**/*.entity.{js,ts}`],
      useUnifiedTopology: true,
    }),
    UsersModule,
    CarsModule,
    AuthModule,
    MessangesModule,
    PaymentsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

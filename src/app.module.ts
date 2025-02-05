import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalsModule } from './animals/animals.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/animal-feeding'),
    AnimalsModule,
  ],
})
export class AppModule {}


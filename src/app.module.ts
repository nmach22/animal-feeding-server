
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './animals/entities/animal';
import { AnimalsModule } from './animals/animals.module';

@Module({
  imports: [
    AnimalsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'dev',
      password: 'dev',
      database: 'dev',
      entities: [Animal],
      synchronize: true,
    }),
  ],
})
export class AppModule {}

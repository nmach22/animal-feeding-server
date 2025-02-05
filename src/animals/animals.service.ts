import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from './entities/animal';
import { MoreThan, Repository } from 'typeorm';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(Animal) private animalRepository: Repository<Animal>,
  ) {}

  feed(id: string) {
    // const updatedAnimal = await this.animalModel.findByIdAndUpdate(
    //   id,
    //   { $inc: { thanksCount: 1 } },
    //   { new: true }
    // );
    //
    // if (!updatedAnimal) {
    //   throw new Error(`Animal with ID ${id} not found`);
    // }
    //
    // return updatedAnimal;
    console.log(id);
    return {
      status: 'DEFAULT',
    };
  }

  async getBidzinaStatus() {
    const fiveMinutesAgo = new Date(Date.now() - 2 * 60 * 1000);

    const sum = await this.animalRepository.sum('gratitude_count', {
      update_date: MoreThan(fiveMinutesAgo),
    });

    const total_gratitude_count = sum || 0;
    if (total_gratitude_count >= 0 && total_gratitude_count <= 99) {
      return 'DEFAULT';
    } else if (total_gratitude_count >= 100 && total_gratitude_count <= 199) {
      return 'HAPPY';
    }

    return 'PUTIN';
  }

  async getAllAnimals() {
    const animals = await this.animalRepository.find();
    return {
      animals: animals,
    };
  }
}

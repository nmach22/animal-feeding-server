import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from './entities/animal';
import { Repository } from 'typeorm';

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

  getBidzinaStatus() {
    // return Promise.resolve(undefined);
    return {
      status: 'DEFAULT',
    };
  }

  async getAllAnimals() {
    return await this.animalRepository.find();
    // return {
    //   animals: [
    //     {
    //       id: 1,
    //       name: 'ღორი',
    //       type: 'MASTER',
    //       image_url: 'https://images.ge/grutunagori',
    //       gratitude_count: 0,
    //       update_date: '12:00:00-12:24:1995',
    //     },
    //     {
    //       id: 2,
    //       name: 'ძროხა',
    //       type: 'SLAVE',
    //       image_url: 'https://images.ge/dzrokha',
    //       gratitude_count: 1,
    //       update_date: '12:00:00-12:24:1995',
    //     },
    //     {
    //       id: 3,
    //       name: 'ცხვარი',
    //       type: 'SLAVE',
    //       image_url: 'https://images.ge/ckhvari',
    //       gratitude_count: 0,
    //       update_date: '12:00:00-12:24:1995',
    //     },
    //   ],
    // };
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Animal, AnimalDocument } from './animals.schema';

@Injectable()
export class AnimalsService {
  constructor(@InjectModel(Animal.name) private animalModel: Model<AnimalDocument>) {}

  async findAll(): Promise<Animal[]> {
    return this.animalModel.find().exec();
  }

  async create(name: string, type: string): Promise<Animal> {
    const newAnimal = new this.animalModel({ name, type });
    return newAnimal.save();
  }
  async feed(id: string): Promise<Animal> {
    const updatedAnimal = await this.animalModel.findByIdAndUpdate(
      id, 
      { $inc: { thanksCount: 1 } }, 
      { new: true }
    );

    if (!updatedAnimal) {
      throw new Error(`Animal with ID ${id} not found`);
    }

    return updatedAnimal;
  }
}


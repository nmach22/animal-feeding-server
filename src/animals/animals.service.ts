import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from './entities/animal';
import { MoreThan, Repository } from 'typeorm';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(Animal) private animalRepository: Repository<Animal>,
  ) {}

  async feed(id: number) {
    const animal = await this.animalRepository.findOne({ where: { id } });

    if (!animal) {
      throw new NotFoundException('Animal not found'); // 404 if animal doesn't exist
    }

    if (animal.type === 'MASTER') {
      throw new ForbiddenException('You cannot modify a master animal'); // 403 if animal is of type 'master'
    }
    const TIMELAPSE = new Date(Date.now() - 1 * 60 * 1000);
    // If the animal's updated_at is more than 5 minutes ago, set gratitude_count to 1
    if (animal.update_date < TIMELAPSE) {
      animal.gratitude_count = 1;
    } else {
      // Otherwise, increase gratitude_count by 1
      animal.gratitude_count += 1;
    }

    // Update the updatedAt field to the current time
    animal.update_date = new Date();

    // Save the updated animal back to the database
    await this.animalRepository.save(animal);

    return await this.getBidzinaStatus();
  }

  async getBidzinaStatus() {
    const TIMELAPSE = new Date(Date.now() - 1 * 60 * 1000);
    const sum = await this.animalRepository.sum('gratitude_count', {
      update_date: MoreThan(TIMELAPSE),
    });

    const total_gratitude_count = sum || 0;
    let status = 'PUTIN';
    if (total_gratitude_count >= 0 && total_gratitude_count <= 5) {
      status = 'DEFAULT';
    } else if (total_gratitude_count >= 6 && total_gratitude_count <= 10) {
      status = 'HAPPY';
    }

    return {
      status: status,
      points: total_gratitude_count,
    };
  }

  async getAllAnimals() {
    const animals = await this.animalRepository.find();
    return {
      animals: animals,
    };
  }
}

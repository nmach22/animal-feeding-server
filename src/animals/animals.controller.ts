import { Controller, Get, Post, Param } from '@nestjs/common';
import { AnimalsService } from './animals.service';

@Controller('api')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Get('/animals')
  async getAnimalsList() {
    return await this.animalsService.getAllAnimals();
  }

  @Post('/animals/:animal_id/feed')
  feedAnimal(@Param('animal_id') animal_id: string) {
    return this.animalsService.feed(animal_id);
  }

  @Get('/bidzina/status')
  async getBidzinaStatus() {
    return await this.animalsService.getBidzinaStatus();
  }
}

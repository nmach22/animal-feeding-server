import { Controller, Get, Post, Param } from '@nestjs/common';
import { AnimalsService } from './animals.service';

@Controller('api') // ✅ Now matches the API URL
export class AnimalsController {

  constructor(private readonly animalsService: AnimalsService) {}

  @Get('/animals')
  async getAnimalsList() {
    return this.animalsService.getAllAnimals();
  }

  @Post('/animals/:animal_id/feed')
  async feedAnimal(@Param('animal_id') animal_id: string) {
    return this.animalsService.feed(animal_id);
  }

  @Get('/bidzina/status')
  async getBidzinaStatus() {
    return this.animalsService.getBidzinaStatus();
  }
}

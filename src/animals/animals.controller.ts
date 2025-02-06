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
  async feedAnimal(@Param('animal_id') animal_id: number) {
    return await this.animalsService.feed(animal_id);
  }

  @Get('/bidzina/status')
  async getBidzinaStatus() {
    return await this.animalsService.getBidzinaStatus();
  }

  @Post('/music/toggle')
  toggleMusic() {
    return this.animalsService.toggleMusic();
  }
}

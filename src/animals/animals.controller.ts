import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AnimalsService } from './animals.service';

@Controller('api/animals')  // ✅ Now matches the API URL
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Get()
  async getAllAnimals() {
    return this.animalsService.findAll();
  }

  @Post()
  async createAnimal(@Body() body: { name: string; type: string }) {
    return this.animalsService.create(body.name, body.type);
  }

  @Post(':id/feed')
  async feedAnimal(@Param('id') id: string) {
    return this.animalsService.feed(id);
  }
}


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(process.env.PORT ?? 3000);

  // Enable CORS for all origins (you can specify domains if needed)
  app.enableCors();

  await app.listen(3000);
}
bootstrap();

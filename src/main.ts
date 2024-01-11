import { configLogger } from '@hoaian-crm/logger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(await configLogger(app));
  app.setGlobalPrefix('/api/v1');
  await app.listen(process.env.APP_PORT || 3000);
}
bootstrap();

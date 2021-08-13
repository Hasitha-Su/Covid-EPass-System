import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const port = process.env.PORT || 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen( process.env.PORT || 4001);
  await app.listen(port, () => console.log(`Listening on ${port}`));
}
bootstrap();

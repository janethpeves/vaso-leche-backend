import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as path from 'path';

import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const logger = new Logger('Bootstrap');
  // Configurar CORS
  app.enableCors({
    origin: '*', // Reemplaza con tu URL permitida
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
  });

  app.setGlobalPrefix('/api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Configuración del servidor estático para servir archivos desde la carpeta 'public'
  app.useStaticAssets(path.join(__dirname, '..', 'public'));

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('REST FULL API VASO DE LECHE')
    .setDescription('Vaso de leche endpoints')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
  logger.log(
    `App running on port http://localhost:${process.env.PORT || 3000}/api`,
  );
}
bootstrap();

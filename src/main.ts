import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { LoggerService } from './services/logger/logger.service';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: new LoggerService()
  });

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('AUTH MONGO NEST')
    .setDescription('Documentación de la API AUTH MONGO NEST')
    .setVersion('1.0')
    .addTag('api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 4000); /*termino de configurar a swagger*/

  console.log  `the application has started`
  console.error `the application has not started`
  console.warn  `the application has started with errors`
  
}
bootstrap();

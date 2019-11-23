import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import * as env from 'dotenv';

import { ElasticService } from './services/databases/ElasticService';
import { DBService } from './services/databases/DBService';
import { MainModule } from './modules/MainModule';

async function bootstrap() {
    env.config();

    await initDatabases();

    const app = await NestFactory.create<NestFastifyApplication>(MainModule, new FastifyAdapter());
    await app.listen(process.env.APP_PORT, '0.0.0.0');
}

async function initDatabases() {
    DBService.initialize();
    ElasticService.initialize();
}

bootstrap();
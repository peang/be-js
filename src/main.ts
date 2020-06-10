import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import * as env from 'dotenv';

import { DBService } from './services/databases/DBService';
import { MainModule } from './modules/MainModule';

async function bootstrap() {
    env.config();
    await initDatabases();

    const app = await NestFactory.create<NestFastifyApplication>(MainModule, new FastifyAdapter());
    await app.listen(Number(process.env.APP_PORT));
}

async function initDatabases() {
    if (process.env.DB_CONNECTION_STRING && process.env.DB_MODELS_PATH) {
        DBService.initialize({
            connection_string: process.env.DB_CONNECTION_STRING,
            models_path: process.env.DB_MODELS_PATH,
        });
    }
}

bootstrap();

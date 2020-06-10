import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/AuthController';
import { RepositoriesModule } from './RepositoriesModule';

@Module({
    controllers: [
        AuthController,
    ],
    providers: [],
    exports: [],
    imports: [
        RepositoriesModule,
    ],
})

export class MainModule { }

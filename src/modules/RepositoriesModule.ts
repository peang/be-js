import { Module } from '@nestjs/common';
import { UserRepository } from '../repo/UserRepository';

@Module({
    providers: [
        UserRepository,
    ],
    exports: [
        UserRepository,
    ],
})

export class RepositoriesModule { }

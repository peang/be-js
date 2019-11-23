import { Module } from "@nestjs/common";
import { AuthController } from "../controllers/AuthController";
import { UserSQLRepository } from "../repo/UserSQLRepository";

@Module({
    controllers: [
        AuthController
    ],
    providers: [
        UserSQLRepository
    ],
    exports: []
})

export class MainModule { }

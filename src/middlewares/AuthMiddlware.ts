import { JWTService } from '../services/auth/JWTService';
import { UserModel } from '../models/UserModel';

import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: Function) {
        const token: string | undefined = req.headers.authorization;
        if (!token) {
            throw new UnauthorizedException('TOKEN_NOT_PROVIDED');
        }

        try {
            const tokenPayload = await JWTService.verifyToken(token);
            req['context'] = await this.generateContext(tokenPayload);
        } catch (err) {
            const message = err.message === 'JWT_EXPIRED' ? 'TOKEN_EXPIRED' : 'INVALID_TOKEN';
            throw new UnauthorizedException(message);
        }

        next();
    }

    async generateContext(user: UserModel): Promise<any> {
        return user;
    };
}

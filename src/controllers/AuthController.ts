import { Controller, Req, Post, Body, HttpStatus, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { JWTService } from '../services/auth/JWTService';
import { UserModel } from '../models/UserModel';
import { UserSQLRepository } from '../repo/UserSQLRepository';

@Controller('/auth')
export class AuthController {
    constructor(
        private readonly UserRepo: UserSQLRepository
    ) { }

    @Post('/login')
    async calback(@Req() req, @Body() body): Promise<ResponseInterface> {
        try {
            // Find User
            const User: UserModel = await this.UserRepo.getUserDetail({
                name: body.name
            });

            if (!User) {
                throw new NotFoundException('USER_NOT_FOUND')
            }

            // Generate Token with user data
            const token: string = await JWTService.generateToken(User.serialize());

            const refreshToken: { token } = await JWTService.generateRefreshToken();
            await this.UserRepo.update({
                id: User.getId()
            }, {
                refresh_token: refreshToken.token
            });

            return {
                message: 'AUTH_CALLBACK',
                status: HttpStatus.OK,
                content: {
                    token
                }
            };
        } catch (err) {
            throw new InternalServerErrorException(err.message);
        }
    }
}

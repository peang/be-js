import { Body, Controller, HttpStatus, InternalServerErrorException, NotFoundException, Post, Req } from '@nestjs/common';
import { UserModel } from '../models/UserModel';
import { UserRepository } from '../repo/UserRepository';
import { JWTService } from '../services/auth/JWTService';

@Controller('/auth')
export class AuthController {
    constructor(
        private readonly UserRepo: UserRepository,
    ) { }

    @Post('/login')
    async calback(@Req() req, @Body() body): Promise<ResponseInterface> {
        try {
            // Find User
            const User: UserModel = await this.UserRepo.getUserDetail({
                email: body.email,
            });

            if (!User) {
                throw new NotFoundException('USER_NOT_FOUND');
            }

            // Generate Token with user data
            const token: string = await JWTService.generateToken(User.serialize());

            const refreshToken: { token } = await JWTService.generateRefreshToken();
            await this.UserRepo.update({
                id: User.getId(),
            }, {
                refresh_token: refreshToken.token,
            });

            return {
                message: 'AUTH_CALLBACK',
                status: HttpStatus.OK,
                content: {
                    token,
                },
            };
        } catch (err) {
            throw new InternalServerErrorException(err.message);
        }
    }
}

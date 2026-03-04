import { Body, Controller, Post, Res } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/createUserDto';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { LoginUserDto } from '../users/dto/loginUserDto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('/login')
    async login(@Res({ passthrough: true }) res: Response, @Body() userDto: LoginUserDto) {
        const loginUser = await this.authService.login(userDto)

        res.cookie('token', loginUser?.token, {
            httpOnly: true,
            maxAge: 40 * 60 * 1000,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
        })

        return {
            message: 'Вход успешен',
            user: loginUser?.user
        }
    }

    @Post('/registration')
    async registration(@Res({ passthrough: true }) res: Response, @Body() userDto: CreateUserDto) {
        const registratedClient = await this.authService.registration(userDto)
        res.cookie('token', registratedClient, {
            httpOnly: true,
            maxAge: 40 * 60 * 1000,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
        })

        return {
            message: "Регистрация прошла успешно",
        }
    }
}

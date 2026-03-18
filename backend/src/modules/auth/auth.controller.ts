import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/createUserDto';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { LoginUserDto } from '../users/dto/loginUserDto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('/login')
    async login(@Body() userDto: LoginUserDto, @Res({ passthrough: true }) res: Response, @Req() req: Request) {
        const loginUser = await this.authService.login(userDto)
        res.cookie('token', loginUser?.token, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: 3600000
        })

        return {
            message: 'Вход успешен',
            id: loginUser?.user.id
        }
    }




    @Post('/registration')
    async registration(@Res({ passthrough: true }) res: Response, @Body() userDto: CreateUserDto) {
        const registratedClient = await this.authService.registration(userDto)
        res.cookie('token', registratedClient.token, {
            httpOnly: true,
            maxAge: 40 * 60 * 1000,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
        })

        return {
            message: "Регистрация прошла успешно",
            id: registratedClient.userId
        }
    }


}

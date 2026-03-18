import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUserDto';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Post('/create')
    async createUser(@Body() dto: CreateUserDto) {
        return this.usersService.createUser(dto)
    }

    @UseGuards(JwtAuthGuard)
    @Post('/JwtGuardTest')
    async test() {
        return {
            message: 'Запрос пройден'
        }
    }


}

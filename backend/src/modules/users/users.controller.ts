import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUserDto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Post('/create')
    async createUser(@Body() dto: CreateUserDto) {
        return this.usersService.createUser(dto)
    }


}

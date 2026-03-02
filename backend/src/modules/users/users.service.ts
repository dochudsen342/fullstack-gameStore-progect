import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) { }

    async createUser(dto: CreateUserDto) {
        const user = this.prisma.user.create({
            data: dto
        })

    }

    async getUserByEmail(email: string) {
        const user = this.prisma.user.findUnique({ where: { email } })
        if (!user) {
            throw new HttpException('Пользователя с таким Email не существует', HttpStatus.BAD_REQUEST)
        }

        return user
    }
}

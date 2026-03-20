import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) { }

    async createUser(dto: CreateUserDto) {
        console.log(dto)
        const user = this.prisma.user.create({
            data: {
                email: dto.email,
                password: dto.password,
                profile: {
                    create: {
                        nickname: dto.profile.nickname,
                        avatar: dto.profile.avatar ?? process.env.DEFAULT_AVATAR,
                        birthday: dto.profile.birthday ?? process.env.DEFAULT_BIRTHDAY
                    }
                }
            }
        })

        return user
    }

    async findProfileByUserId(dto: { userId: number }) {
        const profile = await this.prisma.user.findUnique({ where: { id: dto.userId }, include: { profile: true } })
        if (!profile) {
            return null
        }

        const { password, ...profileWithoutPassword } = profile
        return profileWithoutPassword
    }

    async getUserByEmail(email: string) {
        const user = this.prisma.user.findUnique({ where: { email } })
        if (!user) {
            throw new HttpException('Пользователя с таким Email не существует', HttpStatus.BAD_REQUEST)
        }

        return user
    }



}

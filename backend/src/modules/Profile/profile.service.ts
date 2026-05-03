import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateProfileDto } from "./dto/CrudProfileDto/CreateProfileDto";
import { PrismaService } from "src/prisma/prisma.service";



@Injectable()
export class ProfileService {

    constructor(private prisma: PrismaService) { }


    async checkFreeNickname(profileDto: CreateProfileDto) {
        const profile = await this.prisma.profile.findUnique({ where: { nickname: profileDto.nickname } })

        if (profile) {
            throw new HttpException('Никнейм уже занят', HttpStatus.CONFLICT)
        }

        return {
            message: 'nickname is valid',
        }
    }


    async updateProfile(dto: CreateProfileDto, profileId: string) {
        const profile = await this.prisma.profile.update({ where: { userId: Number(profileId) }, data: { ...dto }, include: { user: { select: { email: true } } } })

        return profile
    }

    async getProfileByUserId(id: string) {
        const profile = await this.prisma.profile.findUnique({ where: { userId: Number(id) }, include: { user: { select: { email: true } } } })

        if (!profile) {
            throw new HttpException('Такого профиля нет в БД', HttpStatus.BAD_REQUEST)
        }

        return profile
    }


}
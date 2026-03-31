import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateProfileDto, UpdateProfile } from "./dto/CrudProfileDto/CreateProfileDto";
import { PrismaService } from "src/prisma/prisma.service";
import { GetProfileDto } from "./dto/getProfileDto/GetProfileDto";



@Injectable()
export class ProfileService {

    constructor(private prisma: PrismaService) { }


    async checkFreeNickname(profileDto: CreateProfileDto) {
        const profile = await this.prisma.profile.findUnique({ where: { nickname: profileDto.nickname } })

        if (profile) {
            throw new HttpException('Никнейм уже занят', HttpStatus.CONFLICT)
        }

        return {
            message: 'nickname is valid'
        }
    }


    async updateProfile(dto: UpdateProfile) {
        const { id, ...dtoWithoutId } = dto

        const data = Object.fromEntries()//
        const profile = this.prisma.profile.update({ where: { userId: Number(dto.id) }, data: { ...dtoWithoutId } })

        return profile
    }

    async getProfileByUserId(dto: GetProfileDto) {

        const profile = this.prisma.profile.findUnique({ where: { userId: Number(dto.id) } })
        if (!profile) {
            throw new HttpException('Такого профиля нет в БД', HttpStatus.BAD_REQUEST)
        }

        return profile
    }


}
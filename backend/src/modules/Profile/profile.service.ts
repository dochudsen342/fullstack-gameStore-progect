import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateProfileDto } from "./dto/CreateProfileDto/CreateProfileDto";
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
            message: 'nickname is valid'
        }
    }

}
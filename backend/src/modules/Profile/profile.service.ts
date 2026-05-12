import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateProfileDto } from './dto/CrudProfileDto/CreateProfileDto'
import { PrismaService } from 'src/prisma/prisma.service'
import { Profile } from '../../../prisma/generated/client'

@Injectable()
export class ProfileService {
   constructor(private prisma: PrismaService) {}

   async checkFreeNickname(dto: CreateProfileDto) {
      const profile = await this.prisma.profile.findUnique({
         where: { nickname: dto.nickname },
      })

      if (profile) {
         throw new HttpException('Никнейм уже занят', HttpStatus.CONFLICT)
      }

      return {
         message: 'nickname is valid',
      }
   }

   async updateProfile(dto: CreateProfileDto, id: string) {
      if (!this.isValidDto<CreateProfileDto>(dto)) {
         throw new HttpException('Нет данных для обновления', HttpStatus.BAD_REQUEST)
      }

      if (!id || isNaN(Number(id))) {
         throw new HttpException('Невалидныйы ID профиля', HttpStatus.BAD_REQUEST)
      }

      const currentProfile = await this.getProfileById(id)

      if (!currentProfile) {
         throw new HttpException('Такого профиля нет в БД', HttpStatus.BAD_REQUEST)
      }

      if (!this.hasChangesField(currentProfile, dto)) {
         throw new HttpException('Нет изменений', HttpStatus.NOT_MODIFIED)
      }

      const updatedProfile = await this.prisma.profile.update({
         where: { userId: Number(id) },
         data: { ...dto },
         include: { user: { select: { email: true } } },
      })

      return updatedProfile
   }

   async getProfileById(id: string) {
      const profile = await this.prisma.profile.findUnique({
         where: { userId: Number(id) },
         include: { user: { select: { email: true } } },
      })

      if (!profile) {
         throw new HttpException('Такого профиля нет в БД', HttpStatus.BAD_REQUEST)
      }

      return profile
   }

   private isValidDto<T>(dto: T) {
      if (!dto || Object.keys(dto).length === 0) {
         return false
      }
   }

   private hasChangesField(currentProfile: Profile, updates: CreateProfileDto) {
      return Object.keys(currentProfile).some(
         (key) => updates[key as keyof CreateProfileDto] !== currentProfile[key as keyof Profile]
      )
   }
}

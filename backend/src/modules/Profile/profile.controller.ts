import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ProfileService } from "./profile.service";
import { CreateProfileDto } from "./dto/CrudProfileDto/CreateProfileDto";



@Controller('')
export class ProfileController {
    constructor(private profileService: ProfileService) { }

    @Get('/getProfile/:id')
    async getProfileByUserId(@Param('id') id: string) {
        const profile = await this.profileService.getProfileByUserId(id)

        return profile
    }

    @Patch('/updateProfile/:id')
    async updateProfileData(@Param('id') profileId: string, @Body() dto: CreateProfileDto) {
        const profile = await this.profileService.updateProfile(dto, profileId)

        return {
            data: profile,
            message: 'Профиль успешно обновлен!'
        }
    }

    @Post('/checkFreeNickname')
    async checkFreeNickname(@Body() dto: CreateProfileDto) {
        return this.profileService.checkFreeNickname(dto)
    }
}
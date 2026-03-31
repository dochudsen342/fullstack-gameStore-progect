import { Body, Controller, Get, Patch, Post } from "@nestjs/common";
import { ProfileService } from "./profile.service";
import { CreateProfileDto, UpdateProfile } from "./dto/CrudProfileDto/CreateProfileDto";
import { GetProfileDto } from "./dto/getProfileDto/GetProfileDto";



@Controller('')
export class ProfileController {
    constructor(private profileService: ProfileService) { }

    @Get('getProfile')
    async getProfileByUserId(@Body() dto: GetProfileDto) {
        const profile = await this.profileService.getProfileByUserId(dto)

        return profile
    }

    @Patch('updateProfile')
    async updateProfileData(@Body() dto: UpdateProfile) {
        return this.profileService.updateProfile(dto)
    }

    @Post('checkFreeNickname')
    async checkFreeNickname(@Body() dto: CreateProfileDto) {
        return this.profileService.checkFreeNickname(dto)
    }
}
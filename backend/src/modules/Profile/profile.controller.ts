import { Body, Controller, Post } from "@nestjs/common";
import { ProfileService } from "./profile.service";
import { CreateProfileDto } from "./dto/CreateProfileDto/CreateProfileDto";



@Controller('')
export class ProfileController {
    constructor(private profileService: ProfileService) { }

    @Post('checkFreeNickname')
    async checkFreeNickname(@Body() dto: CreateProfileDto) {
        return this.profileService.checkFreeNickname(dto)
    }
}
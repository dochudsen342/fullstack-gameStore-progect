import { CreateProfileDto } from "src/modules/Profile/dto/CreateProfileDto/CreateProfileDto"

export class CreateUserDto {
    readonly email!: string
    readonly password!: string
    readonly profile!: CreateProfileDto
}
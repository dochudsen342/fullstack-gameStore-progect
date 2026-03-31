import { IsEmail, IsString, Length } from "class-validator"
import { CreateProfileDto } from "src/modules/Profile/dto/CrudProfileDto/CreateProfileDto"

export class CreateUserDto {
    @IsString({ message: 'Should be a string' })
    @IsEmail({}, { message: 'uncorrected email' })
    readonly email!: string
    @IsString({ message: 'Should be a string' })
    @Length(4, 16, { message: 'Не меньше 4 и не больше 16 ' })
    readonly password!: string
    readonly profile!: CreateProfileDto
}
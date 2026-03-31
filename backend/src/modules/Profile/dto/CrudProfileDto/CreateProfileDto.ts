export class CreateProfileDto {
    readonly nickname!: string
    readonly avatar!: string
    readonly birthday!: string
}

export class UpdateProfile extends CreateProfileDto {
    readonly id!: string
}
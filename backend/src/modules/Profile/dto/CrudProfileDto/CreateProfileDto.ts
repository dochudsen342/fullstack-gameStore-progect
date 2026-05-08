import { IsOptional, IsString } from 'class-validator'

export class CreateProfileDto {
   @IsString()
   readonly nickname!: string

   @IsString()
   @IsOptional()
   readonly avatar!: string

   @IsString()
   @IsOptional()
   readonly birthday!: string
}

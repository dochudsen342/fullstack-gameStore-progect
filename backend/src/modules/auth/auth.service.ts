import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import bcrypt from "bcrypt";
import { CreateUserDto } from '../users/dto/createUserDto';
import { JwtService } from '@nestjs/jwt';
import { User } from 'prisma/generated/client';
import { LoginUserDto } from '../users/dto/loginUserDto';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
        private jwtService: JwtService) { }


    async login(userDto: LoginUserDto) {
        const user = await this.validateUser(userDto)
        const token = await this.generateToken(user)
        const { password, ...userWithotPassword } = user
        return {
            token,
            user: userWithotPassword
        }
    }


    async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email)
        if (candidate) {
            throw new HttpException('Этот email уже зарегистрирован!', HttpStatus.BAD_REQUEST)
        }


        const hashPassword = await bcrypt.hash(userDto.password, 5)

        const user = await this.userService.createUser({
            ...userDto, password: hashPassword
        })

        const token = await this.generateToken(user)
        return {
            token,
            userId: user.id
        }
    }



    private async generateToken(user: User) {
        const payload = { id: user.id, email: user.email }

        return this.jwtService.sign(payload)
    }

    private async validateUser(userDto: LoginUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email)
        if (!user) {
            throw new UnauthorizedException({ message: "Пользователя с таким email не существует" })
        }

        const passwordsIsEquals = await bcrypt.compare(userDto.password, user.password)
        if (!passwordsIsEquals) {
            throw new UnauthorizedException({ message: 'Неверный пароль' })
        }

        return user

    }

}

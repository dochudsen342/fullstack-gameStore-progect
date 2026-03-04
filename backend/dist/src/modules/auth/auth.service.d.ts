import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/createUserDto';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../users/dto/loginUserDto';
export declare class AuthService {
    private prisma;
    private userService;
    private jwtService;
    constructor(prisma: PrismaService, userService: UsersService, jwtService: JwtService);
    login(userDto: LoginUserDto): Promise<{
        token: string;
        user: {
            name: string;
            id: number;
            email: string;
            img: string | null;
        };
    } | undefined>;
    registration(userDto: CreateUserDto): Promise<{
        token: string;
        user: {
            name: string;
            id: number;
            email: string;
            img: string | null;
        };
    }>;
    private generateToken;
    private validateUser;
}
//# sourceMappingURL=auth.service.d.ts.map
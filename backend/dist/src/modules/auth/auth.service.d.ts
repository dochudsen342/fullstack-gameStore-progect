import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/createUserDto';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../users/dto/loginUserDto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(userDto: LoginUserDto): Promise<{
        token: string;
        user: {
            id: number;
            email: string;
        };
    }>;
    registration(userDto: CreateUserDto): Promise<{
        token: string;
        userId: number;
    }>;
    private generateToken;
    private validateUser;
}
//# sourceMappingURL=auth.service.d.ts.map
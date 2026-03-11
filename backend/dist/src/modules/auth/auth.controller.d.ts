import { CreateUserDto } from '../users/dto/createUserDto';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { LoginUserDto } from '../users/dto/loginUserDto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(res: Response, userDto: LoginUserDto): Promise<{
        message: string;
        user: {
            id: number;
            email: string;
            nickname: string;
            img: string | null;
        } | undefined;
    }>;
    registration(res: Response, userDto: CreateUserDto): Promise<{
        message: string;
        id: number;
    }>;
}
//# sourceMappingURL=auth.controller.d.ts.map
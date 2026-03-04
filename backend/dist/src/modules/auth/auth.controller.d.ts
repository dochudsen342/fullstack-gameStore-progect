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
            name: string;
            id: number;
            email: string;
            img: string | null;
        } | undefined;
    }>;
    registration(res: Response, userDto: CreateUserDto): Promise<{
        message: string;
        user: {
            name: string;
            id: number;
            email: string;
            img: string | null;
        };
    }>;
}
//# sourceMappingURL=auth.controller.d.ts.map
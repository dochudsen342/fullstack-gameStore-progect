import { CreateUserDto } from '../users/dto/createUserDto';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { LoginUserDto } from '../users/dto/loginUserDto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(userDto: LoginUserDto, res: Response, req: Request): Promise<{
        message: string;
        id: number;
    }>;
    registration(res: Response, userDto: CreateUserDto): Promise<{
        message: string;
        id: number;
    }>;
}
//# sourceMappingURL=auth.controller.d.ts.map
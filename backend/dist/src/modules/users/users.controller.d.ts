import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUserDto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(dto: CreateUserDto): Promise<{
        id: number;
        password: string;
        email: string;
    }>;
    test(): Promise<{
        message: string;
    }>;
    profile(dto: {
        userId: number;
    }): Promise<{
        message: string;
        profile: {
            profile: {
                id: number;
                nickname: string;
                avatar: string | null;
                birthday: string | null;
                userId: number;
            } | null;
            id: number;
            email: string;
        } | null;
    }>;
}
//# sourceMappingURL=users.controller.d.ts.map
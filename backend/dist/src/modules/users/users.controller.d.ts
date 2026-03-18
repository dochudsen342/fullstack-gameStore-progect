import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUserDto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(dto: CreateUserDto): Promise<{
        id: number;
        password: string;
        email: string;
        nickname: string;
        img: string | null;
    }>;
    test(): Promise<{
        message: string;
    }>;
}
//# sourceMappingURL=users.controller.d.ts.map
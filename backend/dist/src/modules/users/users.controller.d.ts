import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUserDto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(dto: CreateUserDto): Promise<{
        name: string;
        id: number;
        password: string;
        email: string;
        img: string | null;
    }>;
}
//# sourceMappingURL=users.controller.d.ts.map
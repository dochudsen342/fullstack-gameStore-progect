import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/createUserDto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(dto: CreateUserDto): Promise<{
        id: number;
        password: string;
        email: string;
        nickname: string;
        img: string | null;
    }>;
    getUserByEmail(email: string): Promise<{
        id: number;
        password: string;
        email: string;
        nickname: string;
        img: string | null;
    } | null>;
}
//# sourceMappingURL=users.service.d.ts.map
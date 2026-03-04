import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/createUserDto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(dto: CreateUserDto): Promise<{
        name: string;
        id: number;
        password: string;
        email: string;
        img: string | null;
    }>;
    getUserByEmail(email: string): Promise<{
        name: string;
        id: number;
        password: string;
        email: string;
        img: string | null;
    } | null>;
}
//# sourceMappingURL=users.service.d.ts.map
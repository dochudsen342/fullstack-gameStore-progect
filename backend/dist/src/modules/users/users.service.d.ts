import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/createUserDto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(dto: CreateUserDto): Promise<{
        id: number;
        password: string;
        email: string;
    }>;
    findProfileByUserId(dto: {
        userId: number;
    }): Promise<{
        profile: {
            id: number;
            nickname: string;
            avatar: string | null;
            birthday: string | null;
            userId: number;
        } | null;
        id: number;
        email: string;
    } | null>;
    getUserByEmail(email: string): Promise<{
        id: number;
        password: string;
        email: string;
    } | null>;
}
//# sourceMappingURL=users.service.d.ts.map
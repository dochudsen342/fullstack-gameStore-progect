import { PrismaService } from "./prisma/prisma.service";
export declare class AppService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getUsers(): Promise<{
        id: number;
        userName: string;
    }[]>;
    createUser(dto: any): Promise<{
        email: string;
        name: string | null;
        id: number;
    }>;
}
//# sourceMappingURL=app.service.d.ts.map
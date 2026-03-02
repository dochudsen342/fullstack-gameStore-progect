import { AppService } from "./app.service";
export declare class AppCotroller {
    private appService;
    constructor(appService: AppService);
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
//# sourceMappingURL=app.controller.d.ts.map
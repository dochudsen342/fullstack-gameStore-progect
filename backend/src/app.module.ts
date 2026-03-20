import { Module } from "@nestjs/common";
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from "./modules/users/users.module";
import { PrismaModule } from "./prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";
import { ProfileModule } from "./modules/Profile/profile.module";


@Module({
    controllers: [],
    providers: [],
    imports: [ConfigModule.forRoot({
        envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }), AuthModule, UsersModule, PrismaModule, ProfileModule]
})

export class AppModule { }
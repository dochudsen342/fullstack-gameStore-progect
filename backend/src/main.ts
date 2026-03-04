import "dotenv/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import cookieParser from "cookie-parser";



async function start() {
    const PORT = process.env.PORT || 8000;
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: 'http://localhost:3000',
        Credential: true,
    })
    app.use(cookieParser())
    await app.listen(PORT, () => console.log(`Server is start ${PORT}`));
}


start();
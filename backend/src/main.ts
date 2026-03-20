import "dotenv/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import cookieParser from "cookie-parser";



async function start() {
    const PORT = process.env.PORT || 8000;
    const app = await NestFactory.create(AppModule);
    app.use(cookieParser())

    app.enableCors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
    // console.log('NODE_ENV:', process.env.DEFAULT_AVATAR)
    await app.listen(PORT, () => console.log(`Server is start ${PORT}`));
}


start();
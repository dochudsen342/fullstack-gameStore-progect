import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JsonWebTokenError, JwtService, TokenExpiredError } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard implements CanActivate {

    constructor(private jwtService: JwtService) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        try {
            const req = context.switchToHttp().getRequest()
            const cookies = req.cookies
            const token = cookies.token

            if (!token) {
                throw new UnauthorizedException({ message: 'Пользователь не авторизирован1' })
            }

            const user = this.jwtService.verify(token)

            req.user = user

            return true
        } catch (error) {
            if (error instanceof TokenExpiredError) {
                throw new UnauthorizedException({ message: 'Срок действия токена истек' })
            }
            if (error instanceof JsonWebTokenError) {
                throw new UnauthorizedException({ message: 'Невалидный токен' })
            }
            throw new UnauthorizedException({ message: 'Ошибка авторизации' })
        }
    }
}
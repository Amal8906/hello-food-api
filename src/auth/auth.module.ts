import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JWT_SECRET_KEY } from 'src/@core/constants';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';



@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: JWT_SECRET_KEY,
            signOptions: { expiresIn: '60m' },
        }),
    ],
    providers: [AuthService, JwtStrategy],
    exports: [JwtModule]
})
export class AuthModule { }

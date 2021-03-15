import { UserService } from '../modules/user/user.service';
import { Credentials } from './credentials.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    private validatePass;
    login(body: Credentials): Promise<{
        user: import("../modules/user/user.dto").User;
        token: string;
    }>;
}

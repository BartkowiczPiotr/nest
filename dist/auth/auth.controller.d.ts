import { AuthService } from './auth.service';
import { Credentials } from './credentials.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: Credentials): Promise<{
        user: import("../modules/user/user.dto").User;
        token: string;
    }>;
}

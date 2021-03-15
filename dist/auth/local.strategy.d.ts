import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validatePass(email: string, password: string): Promise<{
        companyId: string;
        name: string;
        surname: string;
        title: string;
        contact: {
            readonly email: string;
            readonly phone: string;
            readonly officePhone: string;
        };
        active: boolean;
        createdAt: Date;
        updatedAt?: Date;
        lastActivity?: Date;
    }>;
}
export {};

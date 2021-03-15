import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { Credentials } from './credentials.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(

        private userService: UserService,
        private jwtService: JwtService,

    ) {}

    private async validatePass(email: string, password: string){

        const user = await this.userService.findByEmail(email);

        if(user && await bcrypt.compare(password, user['_SYS_SETTINGS'].hash)){

            return user;

        }

        return null;

    }

    public async login(body: Credentials){

        const user = await this.validatePass(body.email, body.password);

        if (!user) throw new UnauthorizedException();

        const payload = {
            _id: user._id,
            companyId: user.companyId,
        };

        return { 
            user,
            token: this.jwtService.sign(payload) 
        };

    }

}

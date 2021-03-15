import { Body, Controller, Post, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Credentials } from './credentials.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post()
    async login(@Body() body: Credentials){

        return await this.authService.login(body);

    }

}

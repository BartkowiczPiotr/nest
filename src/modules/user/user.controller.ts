import { Body, ClassSerializerInterceptor, Controller, Get, Param, Post, SerializeOptions, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard } from 'src/common/guards/jwt/jwt-auth.guard';
import { Token } from 'src/common/decorators/requests/token.decorator';
import { User } from './user.dto';
import { UserService } from './user.service';


@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {

    constructor(private readonly userService: UserService) {}
    
    @UseGuards(JwtAuthGuard)
    @Get()
    async index(@Token() token: object): Promise<User[]>{

        const users: User[] = await this.userService.find();
        return users;

    }

}

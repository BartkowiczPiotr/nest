import { IsOptional, IsString, IsEmail, MaxLength, MinLength, Matches } from 'class-validator';

export class Credentials {

    @IsString()
    @IsEmail()
    readonly email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(30)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, {message: 'password too weak'})
    readonly password: string;

    @IsOptional()
    @IsString()
    @MinLength(8)
    @MaxLength(30)
    @Matches('password')
    readonly passwordConfirm?: string;

};

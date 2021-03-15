import { Exclude } from 'class-transformer';
import { IsString, IsOptional, IsBoolean, IsDate, IsObject } from 'class-validator';

export class User {

    @IsString()
    @IsOptional()
    readonly _id: string;

    @IsString()
    readonly companyId: string;

    @IsString()
    readonly name: string;

    @IsString()
    readonly surname: string;

    @IsString()
    readonly title: string;

    @IsObject()
    readonly contact: {
        readonly email: string;
        readonly phone: string;
        readonly officePhone: string;
    };

    @IsBoolean()
    readonly active: boolean;

    @IsDate()
    readonly createdAt: Date;

    @IsDate()
    @IsOptional()
    readonly updatedAt?: Date;

    @IsDate()
    @IsOptional()
    readonly lastActivity?: Date;

    @IsOptional()
    @Exclude({toPlainOnly: true})
    _SYS_SETTINGS?: {
        login: string;
        hash?: string;
    };

};

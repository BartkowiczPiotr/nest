import { Document } from 'mongoose';

export interface IUser extends Document{

    _id: string;
    companyId: string;
    name: string;
    surname: string;
    title: string;
    contact: {
        email: string;
        phone: string;
        officePhone: string;
    };
    active: boolean;
    createdAt: Date;
    updatedAt?: Date;
    lastActivity?: Date;
    _SYS_SETTINGS?: {
        login: string;
        hash?: string;
    };

}
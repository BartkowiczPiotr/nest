export declare class User {
    readonly _id: string;
    readonly companyId: string;
    readonly name: string;
    readonly surname: string;
    readonly title: string;
    readonly contact: {
        readonly email: string;
        readonly phone: string;
        readonly officePhone: string;
    };
    readonly active: boolean;
    readonly createdAt: Date;
    readonly updatedAt?: Date;
    readonly lastActivity?: Date;
    _SYS_SETTINGS?: {
        login: string;
        hash?: string;
    };
}

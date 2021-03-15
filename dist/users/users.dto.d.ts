export declare class User {
    readonly id: string;
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
}

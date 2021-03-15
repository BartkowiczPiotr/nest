import { User } from "../user.dto";
export declare class UserSerializer extends User {
    _SYS_SETTINGS?: {
        login: string;
        hash?: string;
    };
    constructor(partial: Partial<UserSerializer>);
}
export declare class UsersSerializer {
    users: User[];
}

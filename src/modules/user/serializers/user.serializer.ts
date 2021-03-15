import { Exclude, Type } from "class-transformer";
import { User } from "../user.dto";

export class UserSerializer extends User{

    @Exclude()
    _SYS_SETTINGS?: {
        login: string;
        hash?: string;
    };

    constructor(partial: Partial<UserSerializer>) {
        super();
        Object.assign(this, partial);
    }

}

export class UsersSerializer{

    @Type(() => UserSerializer)
    users: User[];

}

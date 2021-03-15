import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import { User } from './user.dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<IUser>);
    findByEmail(email: string): Promise<User>;
    findById(_id: string): Promise<User>;
    find(): Promise<User[]>;
    findOne(id: string): void;
    update(user: User): void;
    create(user: User): void;
    delete(id: string): void;
}

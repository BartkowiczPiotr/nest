import { Model } from 'mongoose';
import { IUser } from './user.interface';
import { User } from './user.dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<IUser>);
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
    create(user: User): void;
    find(): Promise<User[]>;
    findOne(id: string): void;
    update(user: User): void;
    delete(id: string): void;
}

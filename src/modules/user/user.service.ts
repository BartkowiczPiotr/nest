import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './interfaces/user.interface';
import { User } from './user.dto'; 

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

    public async findByEmail(email: string): Promise<User>{
        
        const user = await this.userModel.findOne({
            "_SYS_SETTINGS.login": {
                $regex: new RegExp('^' + email), 
                $options: 'i'
            },
        }).exec();

        return user;

    }

    public async findById(_id: string): Promise<User>{
        
        const user = await this.userModel.findOne({ _id }).exec();
        return user;

    }

    public async find(): Promise<User[]>{
        
        const users = await this.userModel.find().exec();
        return users;

    }

    public findOne(id: string){

    }

    public update(user: User){

    }

    public create(user: User){

    }

    public delete(id: string){

    }

}

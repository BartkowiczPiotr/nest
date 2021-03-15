import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(`${process.env.MONGO_URL}/${process.env.MONGO_DB}`, {useNewUrlParser: true}),
        UserModule,
        AuthModule,
    ],
})

export class AppModule {}

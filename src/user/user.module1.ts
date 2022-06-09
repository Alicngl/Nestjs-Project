import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/toolss/modules/user.model';
import { UserController } from './user.controller1';
import { UserService } from './user.service1';


@Module({
    imports: [MongooseModule.forFeature([{ name: "User", schema: UserSchema }])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule { }

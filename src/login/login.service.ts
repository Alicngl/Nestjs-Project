import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserCreateDto, UserLoginDto, UserUpdateDto } from 'toolss/dtos/user.dto';
import { UserModel } from 'toolss/models/user.model';
import { Model } from "mongoose"
import { AuditModel } from 'toolss/models/audit.model';
import { ResourceService } from 'libs/services/resource.service';
import environment from 'toolss/environment/environment';
import { UserService } from 'src/user/user.service';

const bcrypt = require('bcrypt');
const saltRounds = 10;
const hashText = environment.hashText;

@Injectable()
export class LoginService {
    constructor(@InjectModel("User") private readonly userMongo: Model<UserModel>, private userService: UserService) { }

    async loginUser(user: UserLoginDto): Promise<any> {
        try {
            const existUser = await this.userMongo
                .findOne({
                    email: user.email,
                })
                .exec();

            if (existUser) {
                let checkPwd;
                await this.userService
                    .compareHashes(user.password, existUser.password)
                    .then(resp => {
                        if (resp) {
                            checkPwd = true;
                        } else {
                            checkPwd = false;
                        }
                    });

                if (checkPwd) {


                    return await { success: true, value: existUser };
                } else {
                    return await {
                        success: false,
                        response: 'user password is incorrect!',
                    };
                }
            } else {
                return await { success: false, response: 'user does not exist!' };
            }
        } catch (ex) {
            return await {
                success: false,
                response: 'something went wrong while login process!',
                exception: ex,
            };
        }
    }


}

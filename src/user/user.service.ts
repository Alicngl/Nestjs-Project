import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserCreateDto, UserUpdateDto } from 'toolss/dtos/user.dto';
import { UserModel } from 'toolss/models/user.model';
import { Model } from "mongoose"
import { AuditModel } from 'toolss/models/audit.model';
import { ResourceService } from 'libs/services/resource.service';
import environment from 'toolss/environment/environment';

const bcrypt = require('bcrypt');
const saltRounds = 10;
const hashText = environment.hashText;

@Injectable()
export class UserService extends ResourceService<
UserModel,
UserCreateDto,
UserUpdateDto
>{
    constructor(@InjectModel("User") private readonly userMongo: Model<UserModel>) {
        super(userMongo)
    }

    async convertToHash(values: string) {
        let hashPwd;
        await bcrypt.hash(`${hashText}${values}`, saltRounds).then(hash => {
            hashPwd = hash
        })
        return await hashPwd;
    }

    async compareHashes(password, hashed) {
        const match = await bcrypt.compareSync(`${hashText}${password}`, hashed)
        return await match;
    }


}

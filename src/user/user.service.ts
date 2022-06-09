import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserCreateDto, UserUpdateDto } from 'toolss/dtos/user.dto';
import { UserModel } from 'toolss/models/user.model';
import { Model } from "mongoose"
import { AuditModel } from 'toolss/models/audit.model';
import { ResourceService } from 'libs/services/resource.service';

@Injectable()
export class UserService extends ResourceService<
UserModel,
UserCreateDto,
UserUpdateDto
>{
    constructor(@InjectModel("User") private readonly userMongo: Model<UserModel>) {
        super(userMongo)
    }


}

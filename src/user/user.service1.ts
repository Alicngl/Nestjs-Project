import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserCreateDto, UserUpdateDto } from 'src/toolss/dtos/user.dto';
import { UserModel } from 'src/toolss/modules/user.model';
import { Model } from 'mongoose';
import { AuditModel } from 'src/toolss/modules/audit.model';



@Injectable()
export class UserService {
    constructor(@InjectModel("User") private readonly userMongo: Model<UserModel>) {

    }

    async create(user: UserCreateDto): Promise<UserModel> {

        const audit = new AuditModel();
        audit.active = true;
        audit.createdBy = "Admin";
        audit.createdDate = new Date();
        const createdUser = new this.userMongo({ ...user, ...audit });

        return await createdUser.save();
    }

    async findAll(): Promise<UserModel[]> {
        return await this.userMongo.find().exec();
    }

    async findOne(id: string): Promise<UserModel[]> {
        return await this.userMongo.find({ _id: id }).exec();
    }

    async delete(id: string): Promise<UserModel> {
        return await this.userMongo.findByIdAndRemove({ _id: id }).exec();
    }

    async update(id: string, user: UserUpdateDto): Promise<UserModel> {
        let newModel = this.userMongo.findOne({ _id: id }).exec();
        newModel = { ...newModel, ...user }

        return await this.userMongo.findByIdAndUpdate(id, newModel, { new: true }).exec();

    }


}

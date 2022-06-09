import { AuditModel } from "toolss/models/audit.model";
import { Model } from "mongoose"

export class ResourceService<T extends any, C extends any, U extends any>{
    constructor(protected readonly mongoModel: Model<T>) { }

    async create(model: C): Promise<T> {

        const audit = new AuditModel();
        audit.active = true;
        audit.createdBy = "Admin";
        audit.createdDate = new Date();
        const createUser = new this.mongoModel({ ...audit, ...(model as {}) });
        return await createUser.save();
    }

    async findAll(): Promise<T[]> {
        return await this.mongoModel.find().exec();
    }

    async findOne(id: string): Promise<T[]> {
        return await this.mongoModel.find({ _id: id }).exec();
    }

    async delete(id: string): Promise<T> {
        return await this.mongoModel.findByIdAndRemove({ _id: id }).exec()
    }

    async update(id: string, dto: U): Promise<T> {
        let newModel = this.mongoModel.findOne({ _id: id }).exec();
        newModel = { ...newModel, ...(dto as {}) };

        return await this.mongoModel.findByIdAndUpdate(id, newModel, { new: true }).exec();
    }
}
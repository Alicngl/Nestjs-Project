import { AuditModel } from "toolss/models/audit.model";
import { Model } from "mongoose"
import { FilterModel } from "toolss/models/filter.model";

interface A extends AuditModel, Document { }

export class ResourceService<T extends any, C extends any, U extends any>{
    constructor(protected readonly mongoModel: Model<T>) { }

    generalSearchQuery = {
        page: 1,
        size: 10,
        sort: "asc",
        sortBy: "_id",
        queryText: "",
        searchBy: "name"
    }

    async create(model: C): Promise<T> {

        const audit = new AuditModel();
        audit.active = true;
        audit.createdBy = "Admin";
        audit.createdDate = new Date();
        const createUser = new this.mongoModel({ ...audit, ...(model as {}) });
        return await createUser.save();
    }

    async findAll(query?: FilterModel): Promise<any[]> {
        if (query && Object.keys(query).length !== 0) {
            const serachValues = await { ...this.generalSearchQuery, ...query };
            const userRegex = new RegExp(serachValues.queryText, "i");

            return await this.mongoModel.find({ [serachValues.searchBy]: userRegex, 'audit.createdDate': {} })
                .limit(Math.max(0, serachValues.size))
                .skip(serachValues.size * (serachValues.page - 1))
                .sort([[`${serachValues.sortBy}`, serachValues.sort]])
                .exec();

        } else {
            const count = await this.mongoModel.countDocuments({}).exec();
            const data = await this.mongoModel.find()
                .limit(Math.max(0, this.generalSearchQuery.size))
                .skip(this.generalSearchQuery.size * (this.generalSearchQuery.page - 1))
                .exec();
            return await [
                {
                    succes: true,
                    size: this.generalSearchQuery.size,
                    total: count,
                    data,
                }
            ]
        }

    }

    async findOne(id: string): Promise<T> {
        return await this.mongoModel.findById({ _id: id }).exec();
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
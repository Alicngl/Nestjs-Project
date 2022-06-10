import mongoose from "mongoose";
import { AuditModel } from "./audit.model";

export class ProductTypeModel {
    id: string;
    name: string;
    auddit: AuditModel;
}

export const ProductTypeSchema = new mongoose.Schema({
    name: { type: String, required: [true, "user name is required !"] },
    surname: String,
    email: String,
    birthDay: Date,
    audit: Object,
    roles: Array,
    groups: Array,
})
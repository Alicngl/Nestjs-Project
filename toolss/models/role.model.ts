import mongoose from "mongoose";
import { AuditModel } from "./audit.model";

export class RoleModel {
    id: string;
    name: string;
    audit: AuditModel;
}

export const RoleSchema = new mongoose.Schema({
    name: { type: String, required: [true, "user name is required !"] },
    email: String,
    audit: Object,

})
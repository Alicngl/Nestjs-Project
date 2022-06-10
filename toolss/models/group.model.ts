import mongoose from "mongoose";
import { AuditModel } from "./audit.model";
import { RoleModel } from "./role.model";

export class GroupModel {
    id: string;
    name: string;
    description: string;
    audit: AuditModel;
    roles: RoleModel[];
}

export const GroupSchema = new mongoose.Schema({
    name: { type: String, required: [true, "user name is required !"] },
    email: String,
    audit: Object,
    roles: Array,
})
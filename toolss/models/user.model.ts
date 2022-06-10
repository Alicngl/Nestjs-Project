import { AuditModel } from "./audit.model";
import { RoleModel } from "./role.model";
import * as mongoose from "mongoose"
import { GroupModel } from "./group.model";

export class UserModel {
    id: string;
    name: string;
    surname: string;
    image: string;
    email: string;
    birthDay: Date;
    password: string;
    passwordHash: string;
    audit: AuditModel;
    roles: RoleModel[];
    groups: GroupModel[];
}


export const UserSchema = new mongoose.Schema({
    name: { type: String, required: [true, "user name is required !"] },
    surname: String,
    email: String,
    birthDay: Date,
    password: String,
    audit: Object,
    roles: Array,
    groups: Array,
})
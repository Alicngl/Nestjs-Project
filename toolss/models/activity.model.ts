import { AuditModel } from "./audit.model";
import { ActivityTypeModel } from "./activity-type.model";
import mongoose from "mongoose";

export class ActivityModel {
    id: string;
    name: string;
    audit: AuditModel;
    type: ActivityTypeModel;
}

export const ActivitySchema = new mongoose.Schema({
    name: { type: String, required: [true, "user name is required !"] },
    surname: String,
    email: String,
    audit: Object,

})
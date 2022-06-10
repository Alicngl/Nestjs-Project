import mongoose from "mongoose";
import { AuditModel } from "./audit.model";

export class TicketTypeModel {
    id: string;
    name: string;
    audit: AuditModel;
}

export const TicketTypeSchema = new mongoose.Schema({
    name: { type: String, required: [true, "user name is required !"] },
    surname: String,
    birthDay: Date,
    audit: Object,
})
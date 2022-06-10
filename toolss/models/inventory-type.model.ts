import mongoose from "mongoose";
import { AuditModel } from "./audit.model";

export class InventoryTypeModel {
    id: string;
    name: string;
    audit: AuditModel;
}

export const InventoryTypeSchema = new mongoose.Schema({
    name: { type: String, required: [true, "user name is required !"] },
    audit: Object,
    roles: Array,
})
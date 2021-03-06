import { AuditModel } from "./audit.model";
import { ActivityModel } from "./activity.model";
import { InventoryModel } from "./inventory.model";
import { TicketTypeModel } from "./ticket-type.model";
import { UserModel } from "./user.model";
import mongoose from "mongoose";

export class TicketModel {
    id: string;
    name: string;
    description: string;
    type: TicketTypeModel;
    responsible: UserModel;
    audit: AuditModel;
    activities: ActivityModel[];
    inventories: InventoryModel[];
}
export const TicketSchema = new mongoose.Schema({
    name: { type: String, required: [true, "user name is required !"] },
    surname: String,
    email: String,
    birthDay: Date,
    audit: Object,
    roles: Array,
    groups: Array,
})
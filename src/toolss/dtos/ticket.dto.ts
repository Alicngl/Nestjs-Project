import { TicketTypeModel } from "../models/ticket-type.model";
import { UserModel } from "../models/user.model";
import { AuditModel } from "../models/audit.model";
import { ActivityModel } from "../models/activity.model";
import { InventoryModel } from "../models/inventory.model";

export class TicketCreateDto {
    name: string;
    description: string;
    type: TicketTypeModel;
    responsible: UserModel;
    activities: ActivityModel[];
    inventories: InventoryModel[];
}
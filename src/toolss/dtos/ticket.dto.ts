import { TicketTypeModel } from "../modules/ticket-type.model";
import { UserModel } from "../modules/user.model";
import { AuditModel } from "../modules/audit.model";
import { ActivityModel } from "../modules/activity.model";
import { InventoryModel } from "../modules/inventory.model";

export class TicketCreateDto {
    name: string;
    description: string;
    type: TicketTypeModel;
    responsible: UserModel;
    activities: ActivityModel[];
    inventories: InventoryModel[];
}
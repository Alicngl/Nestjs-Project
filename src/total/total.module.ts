import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivityTypeSchema } from 'toolss/models/activity-type.model';
import { ActivitySchema } from 'toolss/models/activity.model';
import { GroupSchema } from 'toolss/models/group.model';
import { InventoryTypeSchema } from 'toolss/models/inventory-type.model';
import { InventorySchema } from 'toolss/models/inventory.model';
import { ProductTypeSchema } from 'toolss/models/product-type.model';
import { ProductSchema } from 'toolss/models/product.model';
import { RoleSchema } from 'toolss/models/role.model';
import { TicketTypeSchema } from 'toolss/models/ticket-type.model';
import { TicketSchema } from 'toolss/models/ticket.model';
import { UserSchema } from 'toolss/models/user.model';
import { TotalController } from './total.controller';
import { TotalService } from './total.service';



@Module({
    imports: [MongooseModule.forFeature([
        { name: "User", schema: UserSchema },
        { name: "Role", schema: RoleSchema },
        { name: "Ticket", schema: TicketSchema },
        { name: "TicketType", schema: TicketTypeSchema },
        { name: "Product", schema: ProductSchema },
        { name: "ProductType", schema: ProductTypeSchema },
        { name: "Inventory", schema: InventorySchema },
        { name: "InventoryType", schema: InventoryTypeSchema },
        { name: "Group", schema: GroupSchema },
        { name: "Activity", schema: ActivitySchema },
        { name: "ActivityType", schema: ActivityTypeSchema },
    ])],
    controllers: [TotalController],
    providers: [TotalService],
})
export class TotalModule { }

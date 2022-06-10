import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserCreateDto, UserUpdateDto } from 'toolss/dtos/user.dto';
import { UserModel } from 'toolss/models/user.model';
import { Model } from "mongoose"
import { RoleModel } from 'toolss/models/role.model';
import { TicketModel } from 'toolss/models/ticket.model';
import { TicketTypeModel } from 'toolss/models/ticket-type.model';
import { ProductModel } from 'toolss/models/product.model';
import { ProductTypeModel } from 'toolss/models/product-type.model';
import { InventoryModel } from 'toolss/models/inventory.model';
import { InventoryTypeModel } from 'toolss/models/inventory-type.model';
import { GroupModel } from 'toolss/models/group.model';
import { ActivityModel } from 'toolss/models/activity.model';
import { ActivityTypeModel } from 'toolss/models/activity-type.model';

@Injectable()
export class TotalService {
    constructor(
        @InjectModel("User") private readonly userMongo: Model<UserModel>,
        @InjectModel("Role") private readonly roleMongo: Model<RoleModel>,
        @InjectModel("Ticket") private readonly ticketMongo: Model<TicketModel>,
        @InjectModel("TicketType") private readonly ticketTypeMongo: Model<TicketTypeModel>,
        @InjectModel("Product") private readonly productMongo: Model<ProductModel>,
        @InjectModel("ProductType") private readonly productTypeMongo: Model<ProductTypeModel>,
        @InjectModel("Inventory") private readonly inventoryMongo: Model<InventoryModel>,
        @InjectModel("InventoryType") private readonly inventoryTypeMongo: Model<InventoryTypeModel>,
        @InjectModel("Group") private readonly groupMongo: Model<GroupModel>,
        @InjectModel("Activity") private readonly activityMongo: Model<ActivityModel>,
        @InjectModel("ActivityType") private readonly activityTypeMongo: Model<ActivityTypeModel>,



    ) { }

    async findAll(): Promise<any> {
        const userCount = await this.userMongo.countDocuments({}).exec();
        const roleCount = await this.roleMongo.countDocuments({}).exec();
        const ticketCount = await this.ticketMongo.countDocuments({}).exec();
        const ticketTypeCount = await this.ticketTypeMongo.countDocuments({}).exec();
        const productCount = await this.productMongo.countDocuments({}).exec();
        const productTypeCount = await this.productTypeMongo.countDocuments({}).exec();
        const inventoryCount = await this.inventoryMongo.countDocuments({}).exec();
        const inventoryTypeCount = await this.inventoryTypeMongo.countDocuments({}).exec();
        const groupCount = await this.groupMongo.countDocuments({}).exec();
        const activityCount = await this.activityMongo.countDocuments({}).exec();
        const activityTypeCounnt = await this.activityTypeMongo.countDocuments({}).exec();
        return await {
            user: userCount,
            role: roleCount,
            ticket: ticketCount,
            ticketType: ticketTypeCount,
            product: productCount,
            productType: productTypeCount,
            inventory: inventoryCount,
            inventoryType: inventoryTypeCount,
            group: groupCount,
            activity: activityCount,
            activityType: activityTypeCounnt,
        }

    }
}

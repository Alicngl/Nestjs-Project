import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InventoryModel } from 'toolss/models/inventory.model';
import { InventoryDto } from 'toolss/dtos/inventory.dto';
import { ResourceService } from 'libs/services/resource.service';

@Injectable()
export class InventoryService extends ResourceService<
InventoryModel,
InventoryDto,
InventoryDto
> {
    constructor(
        @InjectModel('Inventory')
        inventoryMongo: Model<InventoryModel>,
    ) {
        super(inventoryMongo);
    }
}
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InventoryTypeModel } from 'toolss/models/inventory-type.model';
import { InventoryTypeDto } from 'toolss/dtos/inventory-type.dto';
import { ResourceService } from 'libs/services/resource.service';

@Injectable()
export class InventoryTypeService extends ResourceService<
InventoryTypeModel,
InventoryTypeDto,
InventoryTypeDto
> {
    constructor(
        @InjectModel('InventoryType')
        inventoryTypeMongo: Model<InventoryTypeModel>,
    ) {
        super(inventoryTypeMongo);
    }
}
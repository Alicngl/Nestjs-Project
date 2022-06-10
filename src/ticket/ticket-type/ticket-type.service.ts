import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TicketTypeModel } from 'toolss/models/ticket-type.model';
import { TicketTypeDto } from 'toolss/dtos/ticket-type.dto';
import { ResourceService } from 'libs/services/resource.service';

@Injectable()
export class TicketTypeService extends ResourceService<
TicketTypeModel,
TicketTypeDto,
TicketTypeDto
> {
    constructor(
        @InjectModel('TicketType')
        ticketTypeMongo: Model<TicketTypeModel>,
    ) {
        super(ticketTypeMongo);
    }
}
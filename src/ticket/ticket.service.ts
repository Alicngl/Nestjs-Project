import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TicketModel } from 'toolss/models/ticket.model';
import { TicketCreateDto, TicketUpdateDto } from 'toolss/dtos/ticket.dto';
import { ResourceService } from 'libs/services/resource.service';

@Injectable()
export class TicketService extends ResourceService<
TicketModel,
TicketCreateDto,
TicketUpdateDto
> {
    constructor(
        @InjectModel('Ticket')
        ticketMongo: Model<TicketModel>,
    ) {
        super(ticketMongo);
    }
}
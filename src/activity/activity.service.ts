import { Injectable } from '@nestjs/common';
import { ActivityModel } from 'toolss/models/activity.model';
import { ActivityDto } from 'toolss/dtos/activity.dto';
import { ResourceService } from 'libs/services/resource.service';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ActivityService extends ResourceService<
ActivityModel,
ActivityDto,
ActivityDto
> {
    constructor(
        @InjectModel('Activity')
        activityMongo: Model<ActivityModel>,
    ) {
        super(activityMongo);
    }
}
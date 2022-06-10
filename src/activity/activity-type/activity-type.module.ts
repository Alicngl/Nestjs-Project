import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivityTypeSchema } from 'toolss/models/activity-type.model';
import { ActivityTypeController } from './activity-type.controller';
import { ActivityTypeService } from './activity-type.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'ActivityType', schema: ActivityTypeSchema },
        ]),
    ],
    controllers: [ActivityTypeController],
    providers: [ActivityTypeService],
})
export class ActivityTypeModule { }
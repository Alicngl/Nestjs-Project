import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivitySchema } from 'toolss/models/activity.model';
ActivitySchema
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Activity', schema: ActivitySchema }]),
    ],
    controllers: [ActivityController],
    providers: [ActivityService],
})
export class ActivityModule { }
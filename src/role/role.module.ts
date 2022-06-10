import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { RoleSchema } from 'toolss/models/role.model';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Role', schema: RoleSchema }])],
    controllers: [RoleController],
    providers: [RoleService],
})
export class RoleModule { }
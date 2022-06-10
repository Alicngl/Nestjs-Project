import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LibsModule } from 'libs/libs.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import environment from 'toolss/environment/environment';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { ProductModule } from './product/product.module';
import { ActivityModule } from './activity/activity.module';
import { GroupModule } from './group/group.module';
import { InventoryModule } from './inventory/inventory.module';
import { ProductTypeModule } from './product/product-type/product-type.module';
import { InventoryTypeModule } from './inventory/inventory-type/inventory-type.module';
import { ActivityTypeModule } from './activity/activity-type/activity-type.module';
import { TicketTypeModule } from './ticket/ticket-type/ticket-type.module';
import { TicketModule } from './ticket/ticket.module';
import { TotalModule } from './total/total.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [UserModule,
    LibsModule,
    RoleModule,
    ProductModule,
    ActivityModule,
    GroupModule,
    InventoryModule,
    ProductTypeModule,
    InventoryTypeModule,
    ActivityTypeModule,
    TicketTypeModule,
    TicketModule,
    TotalModule,
    LoginModule,
    MongooseModule.forRoot(environment.mongoUrl)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

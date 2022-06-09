import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LibsModule } from 'libs/libs.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import environment from 'toolss/environment/environment';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule,
    LibsModule,
    MongooseModule.forRoot(environment.mongoUrl)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

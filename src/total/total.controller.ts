import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserCreateDto, UserUpdateDto } from 'toolss/dtos/user.dto';
import { UserModel } from 'toolss/models/user.model';
import { FilterModel } from 'toolss/models/filter.model';
import { TotalService } from './total.service';
@Controller('total')
export class TotalController {
    constructor(private totalService: TotalService) { }


    @Get()
    async getAllUsers(): Promise<UserModel[]> {
        return await this.totalService.findAll();
    }


}

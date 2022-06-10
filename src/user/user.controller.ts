import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserCreateDto, UserUpdateDto } from 'toolss/dtos/user.dto';
import { UserService } from './user.service';
import { UserModel } from 'toolss/models/user.model';
import { FilterModel } from 'toolss/models/filter.model';
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    async createuser(@Body() body: UserCreateDto): Promise<UserModel> {
        body.password = await this.userService.convertToHash(body.password);
        return await this.userService.create(body)
    }

    @Get()
    async getAllUsers(@Query() query: FilterModel): Promise<UserModel[]> {

        return await this.userService.findAll(query);
    }

    @Get(":id")
    async getUser(@Param() params): Promise<UserModel> {
        return await this.userService.findOne(params.id);
    }

    @Put(":id")
    async updateUser(@Param("id") id: string,
        @Body() UserUpdateDto: UserUpdateDto,
    ): Promise<UserModel> {
        return await this.userService.update(id, UserUpdateDto);
    }

    @Delete(":id")
    async removeUser(@Param("id") id: string): Promise<UserModel> {
        return await this.userService.delete(id);
    }
}

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserCreateDto, UserUpdateDto } from 'src/toolss/dtos/user.dto';
import { UserService } from './user.service1';
import { UserModel } from 'src/toolss/modules/user.model';
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    async createuser(@Body() body: UserCreateDto): Promise<UserModel> {
        return await this.userService.create(body)
    }

    @Get()
    async getAllUsers(): Promise<UserModel[]> {
        return await this.userService.findAll();
    }

    @Get(":id")
    async getUser(@Param() params): Promise<UserModel[]> {
        return await this.userService.findOne(params.id);
    }

    @Put()
    async updateUser(@Param("id") id: string, @Body() UserUpdateDto: UserUpdateDto,): Promise<UserModel> {
        return await this.userService.update(id, UserUpdateDto);
    }


    @Delete("id")
    async removeUser(@Param("id") id: string): Promise<UserModel> {
        return await this.userService.delete(id);
    }
}

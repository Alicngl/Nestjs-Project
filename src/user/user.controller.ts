import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserCreateDto } from 'src/toolss/dtos/user.dto';
import { UserService } from './user.service';
import { UserModel } from 'src/toolss/models/user.model';
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    createuser(@Body() body: UserCreateDto) {
        return this.userService.createUser(body)
    }

    @Get()
    getAllUsers(): UserModel[] {
        return this.userService.getAllUsers();
    }

    @Get(":id")
    getUser(@Param() params): UserModel {
        return this.userService.getUserById(params.id)
    }
}

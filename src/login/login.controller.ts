import { Controller, Post, Body } from '@nestjs/common';
import { UserLoginDto } from 'toolss/dtos/user.dto';
import { UserModel } from 'toolss/models/user.model';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private loginService: LoginService) { }

    @Post()
    async createUser(@Body() body: UserLoginDto): Promise<UserModel> {
        return await this.loginService.loginUser(body);
    }
}
import { RoleModel } from "../models/role.model";
import { GroupModel } from "../models/group.model";
import { IsNotEmpty, Length } from "class-validator"

export class UserCreateDto {
    @IsNotEmpty()
    @Length(2, 20)
    name: string;
    @Length(2, 20)
    surname: string;
    password: string;
    email: string;
    birthdate: Date;
}

export class UserUpdateDto {
    name: string;
    surname: string;
    image: string;
    password: string;
    email: string;
    birthDay: Date;
    roles: RoleModel;
    groups: GroupModel[];
}

export class UserLoginDto {
    email: string;
    password: string;
}
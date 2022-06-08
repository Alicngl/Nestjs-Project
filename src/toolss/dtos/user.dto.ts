import { RoleModel } from "../modules/role.model";
import { GroupModel } from "../modules/group.model";


export class UserCreateDto {
    name: string;
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
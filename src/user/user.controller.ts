import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService) {}

    @Get()
    getAllUser(){
        // return "getAllUser";
        return this.userService.getAllUser();
    }

    @Get(':id')
    getOneUser(@Param('id') id){
        // return "getOneUser:" + id;
        return this.userService.getOneUser(id);
    }

    @Post()
    postUser(@Body() body){
        // return "PostUser";
        return this.userService.postUser(body);
    }

    @Put(':id')
    putUser(@Body() body, @Param('id') id){
        // return "PutUser " + id;
        return this.userService.putUser(body, id);
    }

    @Delete(':id')
    delUser(@Param('id') id){
        // return "delete User:" + id;
        return this.userService.delUser(id);
    }
}

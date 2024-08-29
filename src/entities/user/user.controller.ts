import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserPipe } from './user.pipe';
import { CreateUserDto  } from './dto/create_user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { Roles } from 'src/auth/roles/roles.decorator';

@Controller('user')
export class UserController {
    constructor (private userService: UserService) {}

   @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('Admin')
    @Get()
    async getRoles() {
      return this.userService.find_users();
    }
 
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('Admin')
    @Get(':id')
    async getUser(@Param('id', ParseIntPipe) id: number) {
      return this.userService.find_user(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('Admin')
    @Post()
    createUser(@Body(new UserPipe()) data : CreateUserDto){  
    return this.userService.create_user(data);
  }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    @Delete(':id')
    deleteUserById(@Param('id', ParseIntPipe) id : number){ 
    return this.userService.delete_user(id);
  }
  }


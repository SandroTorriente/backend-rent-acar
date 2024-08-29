import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { RoleService } from './role.service';
import { RolePipe } from './role.pipe';
import { CreateRoleDto  } from './dto/create_role.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('role')
export class RoleController {
    constructor (private roleService: RoleService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getRoles() {
      return this.roleService.find_roles();
    }
 
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getRole(@Param('id', ParseIntPipe) role_code: number) {
      return this.roleService.find_role(role_code);
    }
 
    @UseGuards(JwtAuthGuard)
    @Post()
    createRole(@Body(new RolePipe()) data : CreateRoleDto){  
    return this.roleService.create_role(data);
  }

  @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteRoleById(@Param('id', ParseIntPipe) role_code : number){ 
    return this.roleService.delete_role(role_code);
  }
  }


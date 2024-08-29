import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDto } from './dto/create_role.dto';


@Injectable()
export class RoleService {
   constructor(private prisma : PrismaService) {}

   async create_role(data: CreateRoleDto): Promise<Role> {
    return this.prisma.role.create({ data: { role_name: data.role_name } });
  }

  async find_roles(): Promise<Role[]> {
    return this.prisma.role.findMany();
  }

  async find_role(role_code: number): Promise<Role> {
    return this.prisma.role.findUnique({ where: { role_code } });
  }

  async delete_role(role_code: number): Promise<Role> {
    return this.prisma.role.delete({ where: { role_code } });
  }
}

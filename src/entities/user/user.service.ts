import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create_user.dto';
import { encodePassword } from 'src/utils/bcrypt';


@Injectable()
export class UserService {
   constructor(private prisma : PrismaService) {}

   async create_user(data: CreateUserDto): Promise<User> {
    // Verificar si el role_code existe en la tabla de roles
    const roleExists = await this.prisma.role.findUnique({
      where: { role_code: data.role_code },
    });
  
    if (!roleExists) {
      throw new Error('El role_code no existe en la lista de roles.');
    }
    const hashedPassword =  encodePassword(data.password);
  
    // Crear el usuario si el role_code es válido
    return this.prisma.user.create({
      data: {
        username: data.username,
        password: hashedPassword,
        email: data.email,
        role_code: data.role_code,
      },
    });
  }

  async find_users(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async find_user(id: number): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async delete_user(id: number): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }
}
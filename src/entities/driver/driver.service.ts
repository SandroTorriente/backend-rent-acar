import { Injectable } from '@nestjs/common';
import { Driver } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDriverDto } from './dto/create_driver.dto';


@Injectable()
export class DriverService {
   constructor(private prisma : PrismaService) {}

   async create_driver(data: CreateDriverDto): Promise<Driver> {
    // Verificar si el category_code existe en la tabla de categorías
    const categoryExists = await this.prisma.category.findUnique({
      where: { category_code: data.category_code },
    });
  
    if (!categoryExists) {
      throw new Error('El category_code no existe en la lista de categorías.');
    }
  
    // Crear el driver si el category_code es válido
    return this.prisma.driver.create({
      data: {
        driver_name: data.driver_name,
        driver_lastname: data.driver_lastname,
        address: data.address,
        age: data.age,
        aviable: data.aviable,
        category_code: data.category_code,
      },
    });
  }

  async find_drivers(): Promise<Driver[]> {
    return this.prisma.driver.findMany();
  }

  async find_driver(driver_code: number): Promise<Driver> {
    return this.prisma.driver.findUnique({ where: { driver_code } });
  }

  async delete_driver(driver_code: number): Promise<Driver> {
    return this.prisma.driver.delete({ where: { driver_code } });
  }
}
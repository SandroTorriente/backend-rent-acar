import { Injectable } from '@nestjs/common';
import { Tourist } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTouristDto } from './dto/create_tourist.dto';
import { fdatasync } from 'fs';


@Injectable()
export class TouristService {
   constructor(private prisma : PrismaService) {}

   async create_tourist(data: CreateTouristDto): Promise<Tourist> {
    // Verificar si el country_code existe en la tabla de países
    const countryExists = await this.prisma.country.findUnique({
      where: { country_code: data.country_code },
    });
  
    if (!countryExists) {
      throw new Error('El country_code no existe en la lista de países.');
    }
  
    // Crear el tourist si el country_code es válido
    return this.prisma.tourist.create({
      data: {
        passport: data.passport,
        tourist_name: data.tourist_name,
        tourist_lastname: data.tourist_lastname,
        age: data.age,
        sex: data.sex,
        contact: data.contact,
        country_code: data.country_code,
      },
    });
  }

  async find_tourists(): Promise<Tourist[]> {
    return this.prisma.tourist.findMany();
  }

  async find_tourist(passport: string): Promise<Tourist> {
    return this.prisma.tourist.findUnique({ where: { passport } });
  }

  async delete_tourist(passport: string): Promise<Tourist> {
    return this.prisma.tourist.delete({ where: { passport } });
  }
}
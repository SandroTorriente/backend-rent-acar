import { Injectable } from '@nestjs/common';
import { Model } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateModelDto } from './dto/create_model.dto';


@Injectable()
export class ModelService {
   constructor(private prisma : PrismaService) {}

   async create_model(data: CreateModelDto): Promise<Model> {
    // Verificar si el brand_code existe en la tabla de marcas
    const brandExists = await this.prisma.brand.findUnique({
      where: { brand_code: data.brand_code },
    });
  
    if (!brandExists) {
      throw new Error('El brand_code no existe en la lista de marcas.');
    }
  
    // Crear el model si el brand_code es válido
    return this.prisma.model.create({
      data: {
        model_name: data.model_name,
        brand_code: data.brand_code,
      },
    });
  }

  async find_models(): Promise<Model[]> {
    return this.prisma.model.findMany();
  }

  async find_model(model_code: number): Promise<Model> {
    return this.prisma.model.findUnique({ where: { model_code } });
  }

  async delete_model(model_code: number): Promise<Model> {
    return this.prisma.model.delete({ where: { model_code } });
  }
}
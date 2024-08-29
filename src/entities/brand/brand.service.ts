import { Injectable } from '@nestjs/common';
import { Brand } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBrandDto } from './dto/create_brand.dto';


@Injectable()
export class BrandService {
   constructor(private prisma : PrismaService) {}

   async create_brand(data: CreateBrandDto): Promise<Brand> {
    return this.prisma.brand.create({ data: { brand_name: data.brand_name } });
  }

  async find_brands(): Promise<Brand[]> {
    return this.prisma.brand.findMany();
  }

  async find_brand(brand_code: number): Promise<Brand> {
    return this.prisma.brand.findUnique({ where: { brand_code } });
  }

  async delete_brand(brand_code: number): Promise<Brand> {
    return this.prisma.brand.delete({ where: { brand_code } });
  }
}
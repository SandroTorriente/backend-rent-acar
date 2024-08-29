import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create_category.dto';


@Injectable()
export class CategoryService {
   constructor(private prisma : PrismaService) {}

   async create_category(data: CreateCategoryDto): Promise<Category> {
    return this.prisma.category.create({ data: { category_name: data.category_name } });
  }

  async find_categories(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  async find_category(category_code: number): Promise<Category> {
    return this.prisma.category.findUnique({ where: { category_code } });
  }

  async delete_category(category_code: number): Promise<Category> {
    return this.prisma.category.delete({ where: { category_code } });
  }
}
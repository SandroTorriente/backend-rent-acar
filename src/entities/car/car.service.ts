import { Injectable } from '@nestjs/common';
import { Car } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCarDto } from './dto/create_car.dto';


@Injectable()
export class CarService {
   constructor(private prisma : PrismaService) {}

   async create_car(data: CreateCarDto): Promise<Car> {
    const modelExists = await this.prisma.model.findUnique({ where: { model_code: data.model_code } });
    const brandExists = await this.prisma.brand.findUnique({ where: { brand_code: data.brand_code } });
    const situationExists = await this.prisma.car_Situation.findUnique({ where: { situation_code: data.situation_code } });
  
    if (!modelExists || !brandExists || !situationExists) {
      throw new Error('Model, Brand, or Situation code does not exist.');
    }
  
    return this.prisma.car.create({
      data: {
        licenseplate: data.licenseplate,
        model_code: data.model_code,
        brand_code: data.brand_code,
        situation_code: data.situation_code,
        rental_price: data.rental_price,
        extension_price: data.extension_price,
        color: data.color,
      },
    });
  }

  async find_cars(): Promise<Car[]> {
    return this.prisma.car.findMany();
  }

  async find_car(licenseplate: string): Promise<Car> {
    return this.prisma.car.findUnique({ where: { licenseplate } });
  }

  async delete_car(licenseplate: string): Promise<Car> {
    return this.prisma.car.delete({ where: { licenseplate } });
  }
}
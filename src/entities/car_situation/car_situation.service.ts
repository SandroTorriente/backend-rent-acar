import { Injectable } from '@nestjs/common';
import { Car_Situation } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCarSituationDto } from './dto/create_situation.dto';


@Injectable()
export class CarSituationService {
   constructor(private prisma : PrismaService) {}

   async create_car_situation(data: CreateCarSituationDto): Promise<Car_Situation> {
    return this.prisma.car_Situation.create({ data: { situation_name: data.situation_name } });
  }

  async find_car_situations(): Promise<Car_Situation[]> {
    return this.prisma.car_Situation.findMany();
  }

  async find_car_situation(situation_code: number): Promise<Car_Situation> {
    return this.prisma.car_Situation.findUnique({ where: { situation_code } });
  }

  async delete_car_situation(situation_code: number): Promise<Car_Situation> {
    return this.prisma.car_Situation.delete({ where: { situation_code } });
  }
}
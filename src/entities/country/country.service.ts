import { Injectable } from '@nestjs/common';
import { Country } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCountryDto } from './dto/create_country.dto';


@Injectable()
export class CountryService {
   constructor(private prisma : PrismaService) {}

   async create_country(data: CreateCountryDto): Promise<Country> {
    return this.prisma.country.create({ data: { country_name: data.country_name } });
  }

  async find_countries(): Promise<Country[]> {
    return this.prisma.country.findMany();
  }

  async find_country(country_code: number): Promise<Country> {
    return this.prisma.country.findUnique({ where: { country_code } });
  }

  async delete_country(country_code: number): Promise<Country> {
    return this.prisma.country.delete({ where: { country_code } });
  }
}
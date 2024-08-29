import { Injectable } from '@nestjs/common';
import { Contract } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContractDto } from './dto/create_contract.dto';


@Injectable()
export class ContractService {
   constructor(private prisma : PrismaService) {}

   async create_contract(data: CreateContractDto): Promise<Contract> {
    const touristExists = await this.prisma.tourist.findUnique({ where: { passport: data.passport } });
    const carExists = await this.prisma.car.findUnique({ where: { licenseplate: data.licenseplate } });
  
    if (!touristExists || !carExists) {
      throw new Error('Passport or License Plate does not exist.');
    }
  
    return this.prisma.contract.create({
      data: {
        passport: data.passport,
        licenseplate: data.licenseplate,
        start_date: data.start_date,
        end_date: data.end_date,
        payment_code: data.payment_code,
        driver_code: data.driver_code,
        extension_days: data.extension_days,
        first_amount: data.first_amount,
        final_amount: data.final_amount,
        active: 'activo',  // Asigna el valor "activo" directamente
        tarifa: data.tarifa,
      },
    });
  }

  async find_contracts(): Promise<Contract[]> {
    return this.prisma.contract.findMany();
  }

  async find_contract(passport: string, licenseplate: string, start_date: Date): Promise<Contract | null> {
    return this.prisma.contract.findFirst({
      where: {
        passport: passport,
        licenseplate: licenseplate,
        start_date: start_date,
      },
    });
  }

  /*async delete_contract(role_code: number): Promise<Contract> {
    return this.prisma.contract.delete({ where: { role_code } });
  }*/

    async deactivateContract(passport: string, licenseplate: string, startDate: Date): Promise<void> {
      await this.prisma.contract.updateMany({
        where: {
          passport: passport,
          licenseplate: licenseplate,
          start_date: startDate,
          active: 'activo',  // Asegúrate de usar el valor correcto
        },
        data: {
          active: 'inactivo',  // Cambia el estado a "inactivo"
        },
      });
    }
}
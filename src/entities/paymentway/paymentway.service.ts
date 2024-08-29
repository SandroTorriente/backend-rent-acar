import { Injectable } from '@nestjs/common';
import { PaymentWay } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaymentWayDto } from './dto/create_paymentway.dto';


@Injectable()
export class PaymentWayService {
   constructor(private prisma : PrismaService) {}

   async create_paymentway(data: CreatePaymentWayDto): Promise<PaymentWay> {
    return this.prisma.paymentWay.create({ data: { payment_method: data.payment_method } });
  }

  async find_paymentways(): Promise<PaymentWay[]> {
    return this.prisma.paymentWay.findMany();
  }

  async find_paymentway(payment_code: number): Promise<PaymentWay> {
    return this.prisma.paymentWay.findUnique({ where: { payment_code } });
  }

  async delete_paymentway(payment_code: number): Promise<PaymentWay> {
    return this.prisma.paymentWay.delete({ where: { payment_code } });
  }
}
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { PaymentWayService } from './paymentway.service';
import { PaymentWayPipe } from './paymentway.pipe';
import { CreatePaymentWayDto  } from './dto/create_paymentway.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('paymentway')
export class PaymentWayController {
    constructor (private paymentWayService: PaymentWayService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getPaymentWays() {
      return this.paymentWayService.find_paymentways();
    }
  
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getPaymentWay(@Param('id', ParseIntPipe) payment_code: number) {
      return this.paymentWayService.find_paymentway(payment_code);
    }
  
    @UseGuards(JwtAuthGuard)
    @Post()
    createPaymentWay(@Body(new PaymentWayPipe()) data : CreatePaymentWayDto){  
    return this.paymentWayService.create_paymentway(data);
  }

  @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deletePaymentWayById(@Param('id', ParseIntPipe) payment_code : number){ 
    return this.paymentWayService.delete_paymentway(payment_code);
  }
  }
import { Module } from '@nestjs/common';
import { PaymentWayService } from './paymentway.service';
import { PaymentWayController } from './paymentway.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [PaymentWayService],
  controllers: [PaymentWayController],
  imports: [PrismaModule]
})
export class PaymentWayModule {}
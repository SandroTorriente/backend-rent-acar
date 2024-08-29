import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [CarService],
  controllers: [CarController],
  imports: [PrismaModule]
})
export class CarModule {}
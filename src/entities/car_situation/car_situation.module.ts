import { Module } from '@nestjs/common';
import { CarSituationService } from './car_situation.service';
import { CarSituationController } from './car_situation.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [CarSituationService],
  controllers: [CarSituationController],
  imports: [PrismaModule]
})
export class CarSituationModule {}
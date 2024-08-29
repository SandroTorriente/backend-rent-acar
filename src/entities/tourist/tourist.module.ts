import { Module } from '@nestjs/common';
import { TouristService } from './tourist.service';
import { TouristController } from './tourist.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [TouristService],
  controllers: [TouristController],
  imports: [PrismaModule]
})
export class TouristModule {}
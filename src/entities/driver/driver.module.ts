import { Module } from '@nestjs/common';
import { DriverService } from './driver.service';
import { DriverController } from './driver.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [DriverService],
  controllers: [DriverController],
  imports: [PrismaModule]
})
export class DriverModule {}
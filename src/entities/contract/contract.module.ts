import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractController } from './contract.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [ContractService],
  controllers: [ContractController],
  imports: [PrismaModule]
})
export class ContractModule {}
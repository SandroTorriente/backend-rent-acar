import { Module } from '@nestjs/common';
import { ModelService } from './model.service';
import { ModelController } from './model.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [ModelService],
  controllers: [ModelController],
  imports: [PrismaModule]
})
export class ModelModule {}
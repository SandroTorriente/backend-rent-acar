import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { ModelService } from './model.service';
import { ModelPipe } from './model.pipe';
import { CreateModelDto  } from './dto/create_model.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('model')
export class ModelController {
    constructor (private modelService: ModelService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getModels() {
      return this.modelService.find_models();
    }
 
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getModel(@Param('id', ParseIntPipe) model_code: number) {
      return this.modelService.find_model(model_code);
    }
 
    @UseGuards(JwtAuthGuard)
    @Post()
    createModel(@Body(new ModelPipe()) data : CreateModelDto){  
    return this.modelService.create_model(data);
  }

  @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteModelById(@Param('id', ParseIntPipe) model_code : number){ 
    return this.modelService.delete_model(model_code);
  }
  }
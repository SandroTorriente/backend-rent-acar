import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { CarSituationService } from './car_situation.service';
import { CarSituationPipe } from './car_situation.pipe';
import { CreateCarSituationDto  } from './dto/create_situation.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('car_situation')
export class CarSituationController {
    constructor (private carSituationService: CarSituationService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getCar_Situations() {
      return this.carSituationService.find_car_situations();
    }
 
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getCar_Situation(@Param('id', ParseIntPipe) role_code: number) {
      return this.carSituationService.find_car_situation(role_code);
    }
 
    @UseGuards(JwtAuthGuard)
    @Post()
    createCar_Situation(@Body(new CarSituationPipe()) data : CreateCarSituationDto){  
    return this.carSituationService.create_car_situation(data);
  }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteCar_SituationById(@Param('id', ParseIntPipe) role_code : number){ 
    return this.carSituationService.delete_car_situation(role_code);
  }
  }
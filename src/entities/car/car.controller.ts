import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { CarService } from './car.service';
import { CarPipe } from './car.pipe';
import { CreateCarDto  } from './dto/create_car.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('car')
export class CarController {
    constructor (private carService: CarService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getCars() {
      return this.carService.find_cars();
    }
 
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getCar(@Param('id', ParseIntPipe) licenseplate: string) {
      return this.carService.find_car(licenseplate);
    }
  
    @UseGuards(JwtAuthGuard)
    @Post()
    createCar(@Body(new CarPipe()) data : CreateCarDto){  
    return this.carService.create_car(data);
  }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteCarById(@Param('id', ParseIntPipe) licenseplate : string){ 
    return this.carService.delete_car(licenseplate);
  }
  }
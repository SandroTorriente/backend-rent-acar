import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { DriverService } from './driver.service';
import { DriverPipe } from './driver.pipe';
import { CreateDriverDto  } from './dto/create_driver.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('driver')
export class DriverController {
    constructor (private driverService: DriverService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getdrivers() {
      return this.driverService.find_drivers();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getdriver(@Param('id', ParseIntPipe) driver_code: number) {
      return this.driverService.find_driver(driver_code);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createdriver(@Body(new DriverPipe()) data : CreateDriverDto){  
    return this.driverService.create_driver(data);
  }

  @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deletedriverById(@Param('id', ParseIntPipe) driver_code : number){ 
    return this.driverService.delete_driver(driver_code);
  }
  }
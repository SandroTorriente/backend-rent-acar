import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { TouristService } from './tourist.service';
import { TouristPipe } from './tourist.pipe';
import { CreateTouristDto  } from './dto/create_tourist.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('tourist')
export class TouristController {
    constructor (private touristService: TouristService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getRoles() {
      return this.touristService.find_tourists();
    }
  
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getRole(@Param('id', ParseIntPipe) passport: string) {
      return this.touristService.find_tourist(passport);
    }
  
    @UseGuards(JwtAuthGuard)
    @Post()
    createRole(@Body(new TouristPipe()) data : CreateTouristDto){  
    return this.touristService.create_tourist(data);
  }

  @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteRoleById(@Param('id', ParseIntPipe) passport : string){ 
    return this.touristService.delete_tourist(passport);
  }
  }
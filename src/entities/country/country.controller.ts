import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryPipe } from './country.pipe';
import { CreateCountryDto  } from './dto/create_country.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('country')
export class CountryController {
    constructor (private countryService: CountryService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getCountrys() {
      return this.countryService.find_countries();
    }
  
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getCountry(@Param('id', ParseIntPipe) country_code: number) {
      return this.countryService.find_country(country_code);
    }
  
    @UseGuards(JwtAuthGuard)
    @Post()
    createCountry(@Body(new CountryPipe()) data : CreateCountryDto){  
    return this.countryService.create_country(data);
  }

  @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteCountryById(@Param('id', ParseIntPipe) country_code : number){ 
    return this.countryService.delete_country(country_code);
  }
  }
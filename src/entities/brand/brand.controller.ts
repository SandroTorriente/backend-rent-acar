import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandPipe } from './brand.pipe';
import { CreateBrandDto  } from './dto/create_brand.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('brand')
export class BrandController {
    constructor (private brandService: BrandService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getBrands() {
      return this.brandService.find_brands();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getBrand(@Param('id', ParseIntPipe) brand_code: number) {
      return this.brandService.find_brand(brand_code);
    }
  
    @UseGuards(JwtAuthGuard)
    @Post()
    createBrand(@Body(new BrandPipe()) data : CreateBrandDto){  
    return this.brandService.create_brand(data);
  }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteBrandById(@Param('id', ParseIntPipe) brand_code : number){ 
    return this.brandService.delete_brand(brand_code);
  }
  }
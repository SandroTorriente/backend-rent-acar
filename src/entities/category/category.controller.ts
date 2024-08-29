import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryPipe } from './category.pipe';
import { CreateCategoryDto  } from './dto/create_category.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('category')
export class CategoryController {
    constructor (private categoryService: CategoryService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getCategories() {
      return this.categoryService.find_categories();
    }
  
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getCategory(@Param('id', ParseIntPipe) category_code: number) {
      return this.categoryService.find_category(category_code);
    }
  
    @UseGuards(JwtAuthGuard)
    @Post()
    createCategory(@Body(new CategoryPipe()) data : CreateCategoryDto){  
    return this.categoryService.create_category(data);
  }

    @UseGuards(JwtAuthGuard) 
    @Delete(':id')
    deleteCategoryById(@Param('id', ParseIntPipe) category_code : number){ 
    return this.categoryService.delete_category(category_code);
  }
  }
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractPipe } from './contract.pipe';
import { CreateContractDto  } from './dto/create_contract.dto';
import { Contract } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('contract')
export class ContractController {
    constructor (private contractService: ContractService) {}
 
    @UseGuards(JwtAuthGuard)
    @Get()
    async getContracts() {
      return this.contractService.find_contracts();
    }
  
    @UseGuards(JwtAuthGuard)
    @Get('find')
    async getContract(
      @Query('passport') passport: string,
      @Query('licenseplate') licenseplate: string,
      @Query('startDate') startDate: string,
    ): Promise<Contract | null> {
      const date = new Date(startDate);
      return this.contractService.find_contract(passport, licenseplate, date);
    }
  
    @UseGuards(JwtAuthGuard)
    @Post()
    createContract(@Body(new ContractPipe()) data : CreateContractDto){  
    return this.contractService.create_contract(data);
  }

   /* @Delete(':id')
    deleteContractById(@Param('id', ParseIntPipe) role_code : number){ 
    return this.contractService.delete_contract(role_code);
  }*/

    @UseGuards(JwtAuthGuard)
    @Patch('deactivate')
    async deactivateContract(
      @Body('passport') passport: string,
      @Body('licenseplate') licenseplate: string,
      @Body('startDate') startDate: string,
    ): Promise<void> {
      const date = new Date(startDate);
      await this.contractService.deactivateContract(passport, licenseplate, date);
    }
  }
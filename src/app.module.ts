import { Module } from '@nestjs/common';
import { RoleModule } from './entities/role/role.module';
import { UserModule } from './entities/user/user.module';
import { BrandModule } from './entities/brand/brand.module';
import { CarSituationModule } from './entities/car_situation/car_situation.module';
import { CategoryModule } from './entities/category/category.module';
import { CountryModule } from './entities/country/country.module';
import { DriverModule } from './entities/driver/driver.module';
import { ModelModule } from './entities/model/model.module';
import { PaymentWayModule } from './entities/paymentway/paymentway.module';
import { TouristModule } from './entities/tourist/tourist.module';
import { CarModule } from './entities/car/car.module';
import { ContractModule } from './entities/contract/contract.module';

@Module({
  imports: [RoleModule, UserModule, BrandModule, CarSituationModule, CategoryModule, CountryModule, DriverModule, ModelModule, PaymentWayModule, TouristModule, CarModule, ContractModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

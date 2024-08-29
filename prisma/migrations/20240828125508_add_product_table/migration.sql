/*
  Warnings:

  - A unique constraint covering the columns `[brand_name]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[situation_name]` on the table `Car_Situation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[category_name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[start_date]` on the table `Contract` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[country_name]` on the table `Country` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[model_name]` on the table `Model` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[payment_method]` on the table `PaymentWay` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[passport]` on the table `Tourist` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Brand_brand_name_key" ON "Brand"("brand_name");

-- CreateIndex
CREATE UNIQUE INDEX "Car_Situation_situation_name_key" ON "Car_Situation"("situation_name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_category_name_key" ON "Category"("category_name");

-- CreateIndex
CREATE UNIQUE INDEX "Contract_start_date_key" ON "Contract"("start_date");

-- CreateIndex
CREATE UNIQUE INDEX "Country_country_name_key" ON "Country"("country_name");

-- CreateIndex
CREATE UNIQUE INDEX "Model_model_name_key" ON "Model"("model_name");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentWay_payment_method_key" ON "PaymentWay"("payment_method");

-- CreateIndex
CREATE UNIQUE INDEX "Tourist_passport_key" ON "Tourist"("passport");

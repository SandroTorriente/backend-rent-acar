-- CreateTable
CREATE TABLE "Brand" (
    "brand_code" SERIAL NOT NULL,
    "brand_name" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("brand_code")
);

-- CreateTable
CREATE TABLE "Car_Situation" (
    "situation_code" SERIAL NOT NULL,
    "situation_name" TEXT NOT NULL,

    CONSTRAINT "Car_Situation_pkey" PRIMARY KEY ("situation_code")
);

-- CreateTable
CREATE TABLE "Category" (
    "category_code" SERIAL NOT NULL,
    "category_name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_code")
);

-- CreateTable
CREATE TABLE "Country" (
    "country_code" SERIAL NOT NULL,
    "country_name" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("country_code")
);

-- CreateTable
CREATE TABLE "Driver" (
    "driver_code" SERIAL NOT NULL,
    "driver_name" TEXT NOT NULL,
    "driver_lastname" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "aviable" TEXT NOT NULL,
    "category_code" INTEGER NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("driver_code")
);

-- CreateTable
CREATE TABLE "Model" (
    "model_code" SERIAL NOT NULL,
    "model_name" TEXT NOT NULL,
    "brand_code" INTEGER NOT NULL,

    CONSTRAINT "Model_pkey" PRIMARY KEY ("model_code")
);

-- CreateTable
CREATE TABLE "PaymentWay" (
    "payment_code" SERIAL NOT NULL,
    "payment_method" TEXT NOT NULL,

    CONSTRAINT "PaymentWay_pkey" PRIMARY KEY ("payment_code")
);

-- CreateTable
CREATE TABLE "Tourist" (
    "passport" TEXT NOT NULL,
    "tourist_name" TEXT NOT NULL,
    "tourist_lastname" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "sex" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "country_code" INTEGER NOT NULL,

    CONSTRAINT "Tourist_pkey" PRIMARY KEY ("passport")
);

-- CreateTable
CREATE TABLE "Car" (
    "licenseplate" TEXT NOT NULL,
    "model_code" INTEGER NOT NULL,
    "brand_code" INTEGER NOT NULL,
    "situation_code" INTEGER NOT NULL,
    "rental_price" INTEGER NOT NULL,
    "extension_price" INTEGER NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("licenseplate")
);

-- CreateTable
CREATE TABLE "Contract" (
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "passport" TEXT NOT NULL,
    "licenseplate" TEXT NOT NULL,
    "payment_code" INTEGER NOT NULL,
    "driver_code" INTEGER NOT NULL,
    "extension_days" INTEGER NOT NULL,
    "fisrt_amount" INTEGER NOT NULL,
    "final_amount" INTEGER NOT NULL,
    "active" TEXT NOT NULL,
    "tarifa" INTEGER NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("start_date")
);

-- CreateIndex
CREATE UNIQUE INDEX "Car_licenseplate_key" ON "Car"("licenseplate");

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_category_code_fkey" FOREIGN KEY ("category_code") REFERENCES "Category"("category_code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_brand_code_fkey" FOREIGN KEY ("brand_code") REFERENCES "Brand"("brand_code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tourist" ADD CONSTRAINT "Tourist_country_code_fkey" FOREIGN KEY ("country_code") REFERENCES "Country"("country_code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_model_code_fkey" FOREIGN KEY ("model_code") REFERENCES "Model"("model_code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_brand_code_fkey" FOREIGN KEY ("brand_code") REFERENCES "Brand"("brand_code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_situation_code_fkey" FOREIGN KEY ("situation_code") REFERENCES "Car_Situation"("situation_code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_passport_fkey" FOREIGN KEY ("passport") REFERENCES "Tourist"("passport") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_licenseplate_fkey" FOREIGN KEY ("licenseplate") REFERENCES "Car"("licenseplate") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_payment_code_fkey" FOREIGN KEY ("payment_code") REFERENCES "PaymentWay"("payment_code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_driver_code_fkey" FOREIGN KEY ("driver_code") REFERENCES "Driver"("driver_code") ON DELETE CASCADE ON UPDATE CASCADE;

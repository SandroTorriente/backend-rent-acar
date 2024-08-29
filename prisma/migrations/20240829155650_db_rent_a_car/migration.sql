/*
  Warnings:

  - A unique constraint covering the columns `[dni]` on the table `Driver` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dni` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Driver" ADD COLUMN     "dni" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Driver_dni_key" ON "Driver"("dni");

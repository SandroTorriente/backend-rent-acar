/*
  Warnings:

  - A unique constraint covering the columns `[role_name]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role_code" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Role_role_name_key" ON "Role"("role_name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_code_fkey" FOREIGN KEY ("role_code") REFERENCES "Role"("role_code") ON DELETE CASCADE ON UPDATE CASCADE;

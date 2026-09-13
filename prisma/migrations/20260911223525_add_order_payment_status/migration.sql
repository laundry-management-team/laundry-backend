/*
  Warnings:

  - You are about to drop the column `timezone` on the `branches` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('UNPAID', 'PAID');

-- AlterTable
ALTER TABLE "branches" DROP COLUMN "timezone";

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "payment_status" "PaymentStatus" NOT NULL DEFAULT 'UNPAID';

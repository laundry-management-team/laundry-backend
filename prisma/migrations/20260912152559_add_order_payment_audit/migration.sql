-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "marked_paid_by_id" TEXT,
ADD COLUMN     "paid_at" TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_marked_paid_by_id_fkey" FOREIGN KEY ("marked_paid_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

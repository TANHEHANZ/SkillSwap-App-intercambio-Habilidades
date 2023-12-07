/*
  Warnings:

  - Added the required column `trabajoId` to the `Solicitud` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Solicitud" ADD COLUMN     "trabajoId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Solicitud" ADD CONSTRAINT "Solicitud_trabajoId_fkey" FOREIGN KEY ("trabajoId") REFERENCES "Trabajos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

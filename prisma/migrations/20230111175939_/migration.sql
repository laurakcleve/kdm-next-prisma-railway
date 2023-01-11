/*
  Warnings:

  - You are about to drop the column `value` on the `SpecialRule` table. All the data in the column will be lost.
  - You are about to drop the `_GearToSpecialRule` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_GearToSpecialRule" DROP CONSTRAINT "_GearToSpecialRule_A_fkey";

-- DropForeignKey
ALTER TABLE "_GearToSpecialRule" DROP CONSTRAINT "_GearToSpecialRule_B_fkey";

-- AlterTable
ALTER TABLE "SpecialRule" DROP COLUMN "value";

-- DropTable
DROP TABLE "_GearToSpecialRule";

-- CreateTable
CREATE TABLE "GearHasSpecialRule" (
    "gearId" INTEGER NOT NULL,
    "ruleId" INTEGER NOT NULL,
    "value" INTEGER,

    CONSTRAINT "GearHasSpecialRule_pkey" PRIMARY KEY ("gearId","ruleId")
);

-- AddForeignKey
ALTER TABLE "GearHasSpecialRule" ADD CONSTRAINT "GearHasSpecialRule_gearId_fkey" FOREIGN KEY ("gearId") REFERENCES "Gear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GearHasSpecialRule" ADD CONSTRAINT "GearHasSpecialRule_ruleId_fkey" FOREIGN KEY ("ruleId") REFERENCES "SpecialRule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

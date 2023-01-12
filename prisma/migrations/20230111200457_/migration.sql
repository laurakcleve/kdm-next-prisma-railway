-- DropForeignKey
ALTER TABLE "GearHasSpecialRule" DROP CONSTRAINT "GearHasSpecialRule_gearId_fkey";

-- DropForeignKey
ALTER TABLE "GearHasSpecialRule" DROP CONSTRAINT "GearHasSpecialRule_ruleId_fkey";

-- AddForeignKey
ALTER TABLE "GearHasSpecialRule" ADD CONSTRAINT "GearHasSpecialRule_gearId_fkey" FOREIGN KEY ("gearId") REFERENCES "Gear"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GearHasSpecialRule" ADD CONSTRAINT "GearHasSpecialRule_ruleId_fkey" FOREIGN KEY ("ruleId") REFERENCES "SpecialRule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

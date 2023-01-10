-- DropForeignKey
ALTER TABLE "Gear" DROP CONSTRAINT "Gear_settlementLocationId_fkey";

-- DropForeignKey
ALTER TABLE "GearAffinity" DROP CONSTRAINT "GearAffinity_gearId_fkey";

-- DropForeignKey
ALTER TABLE "GearUsesResource" DROP CONSTRAINT "GearUsesResource_gearId_fkey";

-- DropForeignKey
ALTER TABLE "GearUsesResource" DROP CONSTRAINT "GearUsesResource_resourceId_fkey";

-- DropForeignKey
ALTER TABLE "GearUsesResourceKeyword" DROP CONSTRAINT "GearUsesResourceKeyword_gearId_fkey";

-- DropForeignKey
ALTER TABLE "GearUsesResourceKeyword" DROP CONSTRAINT "GearUsesResourceKeyword_resourceKeywordId_fkey";

-- AddForeignKey
ALTER TABLE "Gear" ADD CONSTRAINT "Gear_settlementLocationId_fkey" FOREIGN KEY ("settlementLocationId") REFERENCES "SettlementLocation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GearAffinity" ADD CONSTRAINT "GearAffinity_gearId_fkey" FOREIGN KEY ("gearId") REFERENCES "Gear"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GearUsesResource" ADD CONSTRAINT "GearUsesResource_gearId_fkey" FOREIGN KEY ("gearId") REFERENCES "Gear"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GearUsesResource" ADD CONSTRAINT "GearUsesResource_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GearUsesResourceKeyword" ADD CONSTRAINT "GearUsesResourceKeyword_gearId_fkey" FOREIGN KEY ("gearId") REFERENCES "Gear"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GearUsesResourceKeyword" ADD CONSTRAINT "GearUsesResourceKeyword_resourceKeywordId_fkey" FOREIGN KEY ("resourceKeywordId") REFERENCES "ResourceKeyword"("id") ON DELETE CASCADE ON UPDATE CASCADE;

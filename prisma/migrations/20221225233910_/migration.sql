-- CreateTable
CREATE TABLE "Gear" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "settlementLocationId" INTEGER,

    CONSTRAINT "Gear_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gear_name_key" ON "Gear"("name");

-- AddForeignKey
ALTER TABLE "Gear" ADD CONSTRAINT "Gear_settlementLocationId_fkey" FOREIGN KEY ("settlementLocationId") REFERENCES "SettlementLocation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

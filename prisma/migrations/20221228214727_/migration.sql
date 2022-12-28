-- CreateEnum
CREATE TYPE "Side" AS ENUM ('TOP', 'RIGHT', 'BOTTOM', 'LEFT');

-- CreateEnum
CREATE TYPE "Color" AS ENUM ('RED', 'GREEN', 'BLUE');

-- CreateTable
CREATE TABLE "GearAffinity" (
    "id" SERIAL NOT NULL,
    "gearId" INTEGER NOT NULL,
    "side" "Side" NOT NULL,
    "color" "Color" NOT NULL,

    CONSTRAINT "GearAffinity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GearAffinity" ADD CONSTRAINT "GearAffinity_gearId_fkey" FOREIGN KEY ("gearId") REFERENCES "Gear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

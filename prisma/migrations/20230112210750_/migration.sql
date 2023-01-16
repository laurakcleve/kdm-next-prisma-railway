-- CreateTable
CREATE TABLE "AffinityBonus" (
    "id" SERIAL NOT NULL,
    "gearId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "AffinityBonus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AffinityBonusRequirement" (
    "id" SERIAL NOT NULL,
    "affinityBonusId" INTEGER NOT NULL,
    "color" "Color" NOT NULL,
    "number" INTEGER NOT NULL DEFAULT 1,
    "isPuzzlePiece" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "AffinityBonusRequirement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AffinityBonus_gearId_key" ON "AffinityBonus"("gearId");

-- AddForeignKey
ALTER TABLE "AffinityBonus" ADD CONSTRAINT "AffinityBonus_gearId_fkey" FOREIGN KEY ("gearId") REFERENCES "Gear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AffinityBonusRequirement" ADD CONSTRAINT "AffinityBonusRequirement_affinityBonusId_fkey" FOREIGN KEY ("affinityBonusId") REFERENCES "AffinityBonus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

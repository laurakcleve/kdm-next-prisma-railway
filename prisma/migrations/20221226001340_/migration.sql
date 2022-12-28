-- CreateTable
CREATE TABLE "GearKeyword" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "GearKeyword_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GearToGearKeyword" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "GearKeyword_name_key" ON "GearKeyword"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_GearToGearKeyword_AB_unique" ON "_GearToGearKeyword"("A", "B");

-- CreateIndex
CREATE INDEX "_GearToGearKeyword_B_index" ON "_GearToGearKeyword"("B");

-- AddForeignKey
ALTER TABLE "_GearToGearKeyword" ADD CONSTRAINT "_GearToGearKeyword_A_fkey" FOREIGN KEY ("A") REFERENCES "Gear"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GearToGearKeyword" ADD CONSTRAINT "_GearToGearKeyword_B_fkey" FOREIGN KEY ("B") REFERENCES "GearKeyword"("id") ON DELETE CASCADE ON UPDATE CASCADE;

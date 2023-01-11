-- AlterTable
ALTER TABLE "Gear" ADD COLUMN     "cardText" TEXT;

-- CreateTable
CREATE TABLE "SpecialRule" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "SpecialRule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GearToSpecialRule" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "SpecialRule_name_key" ON "SpecialRule"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_GearToSpecialRule_AB_unique" ON "_GearToSpecialRule"("A", "B");

-- CreateIndex
CREATE INDEX "_GearToSpecialRule_B_index" ON "_GearToSpecialRule"("B");

-- AddForeignKey
ALTER TABLE "_GearToSpecialRule" ADD CONSTRAINT "_GearToSpecialRule_A_fkey" FOREIGN KEY ("A") REFERENCES "Gear"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GearToSpecialRule" ADD CONSTRAINT "_GearToSpecialRule_B_fkey" FOREIGN KEY ("B") REFERENCES "SpecialRule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

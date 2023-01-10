-- CreateTable
CREATE TABLE "GearUsesResource" (
    "gearId" INTEGER NOT NULL,
    "resourceId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "GearUsesResource_pkey" PRIMARY KEY ("gearId","resourceId")
);

-- CreateTable
CREATE TABLE "GearUsesResourceKeyword" (
    "gearId" INTEGER NOT NULL,
    "resourceKeywordId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "GearUsesResourceKeyword_pkey" PRIMARY KEY ("gearId","resourceKeywordId")
);

-- CreateTable
CREATE TABLE "Resource" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResourceKeyword" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ResourceKeyword_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ResourceToResourceKeyword" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Resource_name_key" ON "Resource"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ResourceKeyword_name_key" ON "ResourceKeyword"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ResourceToResourceKeyword_AB_unique" ON "_ResourceToResourceKeyword"("A", "B");

-- CreateIndex
CREATE INDEX "_ResourceToResourceKeyword_B_index" ON "_ResourceToResourceKeyword"("B");

-- AddForeignKey
ALTER TABLE "GearUsesResource" ADD CONSTRAINT "GearUsesResource_gearId_fkey" FOREIGN KEY ("gearId") REFERENCES "Gear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GearUsesResource" ADD CONSTRAINT "GearUsesResource_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GearUsesResourceKeyword" ADD CONSTRAINT "GearUsesResourceKeyword_gearId_fkey" FOREIGN KEY ("gearId") REFERENCES "Gear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GearUsesResourceKeyword" ADD CONSTRAINT "GearUsesResourceKeyword_resourceKeywordId_fkey" FOREIGN KEY ("resourceKeywordId") REFERENCES "ResourceKeyword"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResourceToResourceKeyword" ADD CONSTRAINT "_ResourceToResourceKeyword_A_fkey" FOREIGN KEY ("A") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ResourceToResourceKeyword" ADD CONSTRAINT "_ResourceToResourceKeyword_B_fkey" FOREIGN KEY ("B") REFERENCES "ResourceKeyword"("id") ON DELETE CASCADE ON UPDATE CASCADE;

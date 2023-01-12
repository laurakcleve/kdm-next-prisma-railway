-- CreateEnum
CREATE TYPE "HitLocation" AS ENUM ('HEAD', 'ARMS', 'BODY', 'WAIST', 'LEGS');

-- AlterTable
ALTER TABLE "Gear" ADD COLUMN     "hitLocation" "HitLocation";

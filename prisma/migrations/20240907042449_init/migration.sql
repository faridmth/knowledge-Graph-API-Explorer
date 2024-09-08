/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Entity" (
    "EntityId" TEXT NOT NULL,
    "EntityName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "History" (
    "Id" SERIAL NOT NULL,
    "ResultScore" INTEGER NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "EntityId" TEXT NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Entity_EntityId_key" ON "Entity"("EntityId");

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_EntityId_fkey" FOREIGN KEY ("EntityId") REFERENCES "Entity"("EntityId") ON DELETE RESTRICT ON UPDATE CASCADE;

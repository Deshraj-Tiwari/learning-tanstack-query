-- CreateTable
CREATE TABLE "newPost" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,

    CONSTRAINT "newPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "category" TEXT NOT NULL,
    "creationDate" DATETIME NOT NULL,
    "description" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,
    "lastUpdate" DATETIME NOT NULL,
    "status" TEXT NOT NULL
);

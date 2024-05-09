-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "category" TEXT NOT NULL,
    "creationDate" DATETIME NOT NULL,
    "description" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,
    "lastUpdate" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Initialized'
);
INSERT INTO "new_Appointment" ("category", "creationDate", "description", "externalId", "id", "lastUpdate", "status") SELECT "category", "creationDate", "description", "externalId", "id", "lastUpdate", "status" FROM "Appointment";
DROP TABLE "Appointment";
ALTER TABLE "new_Appointment" RENAME TO "Appointment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

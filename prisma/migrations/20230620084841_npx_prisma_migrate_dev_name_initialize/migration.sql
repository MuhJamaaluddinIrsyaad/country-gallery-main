-- CreateTable
CREATE TABLE "Country" (
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL PRIMARY KEY,
    "image_url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Resort" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "countrySlug" TEXT,
    "description" TEXT,
    CONSTRAINT "Resort_countrySlug_fkey" FOREIGN KEY ("countrySlug") REFERENCES "Country" ("slug") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_slug_key" ON "Country"("slug");

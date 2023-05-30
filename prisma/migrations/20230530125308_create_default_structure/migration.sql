-- CreateTable
CREATE TABLE "techs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ProjectsTechs" (
    "id" TEXT NOT NULL,
    "techs_id" TEXT NOT NULL,
    "projects_id" TEXT NOT NULL,
    CONSTRAINT "ProjectsTechs_techs_id_fkey" FOREIGN KEY ("techs_id") REFERENCES "techs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProjectsTechs_projects_id_fkey" FOREIGN KEY ("projects_id") REFERENCES "projects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "projectGithub" TEXT,
    "projectOnline" TEXT,
    "thumbnail" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "techs_id_key" ON "techs"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectsTechs_id_key" ON "ProjectsTechs"("id");

-- CreateIndex
CREATE UNIQUE INDEX "projects_id_key" ON "projects"("id");

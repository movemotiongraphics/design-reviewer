-- CreateEnum
CREATE TYPE "ReviewRunStatus" AS ENUM ('queued', 'preparing_emulator', 'installing_apk', 'launching_app', 'exploring', 'completed', 'failed', 'cancelled');

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApkBuild" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "packageName" TEXT,
    "versionName" TEXT,
    "versionCode" TEXT,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ApkBuild_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewRun" (
    "id" TEXT NOT NULL,
    "apkBuildId" TEXT NOT NULL,
    "status" "ReviewRunStatus" NOT NULL DEFAULT 'queued',
    "maxDepth" INTEGER NOT NULL DEFAULT 2,
    "maxNodes" INTEGER NOT NULL DEFAULT 30,
    "maxTapsPerScreen" INTEGER NOT NULL DEFAULT 6,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "errorMessage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReviewRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScreenNode" (
    "id" TEXT NOT NULL,
    "reviewRunId" TEXT NOT NULL,
    "screenshotPath" TEXT NOT NULL,
    "activityName" TEXT,
    "stateName" TEXT,
    "uiTreeJson" JSONB,
    "depth" INTEGER NOT NULL,
    "hash" TEXT NOT NULL,
    "clickableCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ScreenNode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScreenEdge" (
    "id" TEXT NOT NULL,
    "reviewRunId" TEXT NOT NULL,
    "fromNodeId" TEXT,
    "toNodeId" TEXT NOT NULL,
    "actionType" TEXT NOT NULL,
    "targetLabel" TEXT,
    "targetText" TEXT,
    "targetBounds" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ScreenEdge_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ApkBuild_projectId_idx" ON "ApkBuild"("projectId");

-- CreateIndex
CREATE INDEX "ReviewRun_apkBuildId_idx" ON "ReviewRun"("apkBuildId");

-- CreateIndex
CREATE INDEX "ReviewRun_status_idx" ON "ReviewRun"("status");

-- CreateIndex
CREATE INDEX "ScreenNode_reviewRunId_idx" ON "ScreenNode"("reviewRunId");

-- CreateIndex
CREATE INDEX "ScreenNode_hash_idx" ON "ScreenNode"("hash");

-- CreateIndex
CREATE INDEX "ScreenEdge_reviewRunId_idx" ON "ScreenEdge"("reviewRunId");

-- CreateIndex
CREATE INDEX "ScreenEdge_fromNodeId_idx" ON "ScreenEdge"("fromNodeId");

-- CreateIndex
CREATE INDEX "ScreenEdge_toNodeId_idx" ON "ScreenEdge"("toNodeId");

-- AddForeignKey
ALTER TABLE "ApkBuild" ADD CONSTRAINT "ApkBuild_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewRun" ADD CONSTRAINT "ReviewRun_apkBuildId_fkey" FOREIGN KEY ("apkBuildId") REFERENCES "ApkBuild"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScreenNode" ADD CONSTRAINT "ScreenNode_reviewRunId_fkey" FOREIGN KEY ("reviewRunId") REFERENCES "ReviewRun"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScreenEdge" ADD CONSTRAINT "ScreenEdge_reviewRunId_fkey" FOREIGN KEY ("reviewRunId") REFERENCES "ReviewRun"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScreenEdge" ADD CONSTRAINT "ScreenEdge_fromNodeId_fkey" FOREIGN KEY ("fromNodeId") REFERENCES "ScreenNode"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScreenEdge" ADD CONSTRAINT "ScreenEdge_toNodeId_fkey" FOREIGN KEY ("toNodeId") REFERENCES "ScreenNode"("id") ON DELETE CASCADE ON UPDATE CASCADE;

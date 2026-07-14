import { SiteHeader } from "~/components/site-header";
import { ProjectDetailClient } from "./_components/project-detail-client";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <ProjectDetailClient projectId={projectId} />
      </main>
    </>
  );
}

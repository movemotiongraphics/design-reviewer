import { SiteHeader } from "~/components/site-header";
import { ProjectsClient } from "./_components/projects-client";

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <ProjectsClient />
      </main>
    </>
  );
}

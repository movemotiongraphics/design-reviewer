import { SiteHeader } from "~/components/site-header";
import { RunClient } from "./_components/run-client";

export default async function RunPage({
  params,
}: {
  params: Promise<{ runId: string }>;
}) {
  const { runId } = await params;
  return (
    <>
      <SiteHeader />
      <RunClient runId={runId} />
    </>
  );
}

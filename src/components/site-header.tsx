import Link from "next/link";
import { Smartphone } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4">
        <Link href="/projects" className="flex items-center gap-2 font-semibold">
          <Smartphone className="size-5" />
          APK Node Map
        </Link>
      </div>
    </header>
  );
}

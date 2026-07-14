import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "sonner";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "APK UI Review",
  description:
    "Manual-but-assisted Android UI review: explore screens, comment, and organise a screenshot graph.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <TRPCReactProvider>
          {children}
          <Toaster richColors position="bottom-right" />
        </TRPCReactProvider>
      </body>
    </html>
  );
}

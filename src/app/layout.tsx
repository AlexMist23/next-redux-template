/* Core */
import type { Metadata } from "next";
import { Inter } from "next/font/google";

/* Instruments */
import { Providers } from "@/lib/providers";

/* CSS */
import "@/styles/globals.scss";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "<Placeholder>",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

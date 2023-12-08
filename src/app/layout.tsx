/* Core */
import type { Metadata } from "next";
import { Inter } from "next/font/google";

/* Instruments */
import { Providers } from "@/lib/providers";

/* Components */
import { Nav } from "@/components";

/* CSS */
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "<Placeholder>", // TODO!
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <Nav />
          <main>{children}</main>
        </body>
      </html>
    </Providers>
  );
}

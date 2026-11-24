import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taisiia Perekos — Web & Mobile UI/UX Designer",
  description: "Portfolio of Taisiia Perekos, Web & Mobile UI/UX Designer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-canvas font-sans text-ink">{children}</body>
    </html>
  );
}

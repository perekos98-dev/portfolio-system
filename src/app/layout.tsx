import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taisiia Perekos — Web & Mobile UI/UX Designer",
  description: "Portfolio of Taisiia Perekos, Web & Mobile UI/UX Designer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}

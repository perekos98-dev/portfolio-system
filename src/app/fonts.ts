import { Inter } from "next/font/google";

// Inter is a variable font, so every weight is available without listing weights.
export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

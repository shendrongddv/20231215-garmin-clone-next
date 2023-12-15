import { Oswald as FontDisplay, Roboto as FontBody } from "next/font/google";

export const fontDisplay = FontDisplay({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
});

export const fontBody = FontBody({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

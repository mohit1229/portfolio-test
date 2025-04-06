import "./globals.css";
import type { Metadata } from "next";
import {Inter} from "next/font/google"
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Mohit Kumar",
};
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
 <head></head>

      <body>{children}</body>
    </html>
  );
}

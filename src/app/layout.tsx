import type { Metadata } from "next";
import { Elsie_Swash_Caps, Abril_Fatface, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import NavOther from "./components/NavOther";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const elsie = Elsie_Swash_Caps({
  subsets: ["latin"],
  weight: ["400", "900"],
});
export const metadata: Metadata = {
  title: "Moaz Tobok",
  description: "Moaz Tobok's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

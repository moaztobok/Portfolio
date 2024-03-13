import type { Metadata } from "next";
import { Elsie_Swash_Caps, Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Moaz Tobok",
  description: "Moaz Tobok's portfolio website",
};
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

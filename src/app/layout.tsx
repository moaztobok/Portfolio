import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '../components/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Moaz Tobok',
  description: "Moaz Tobok's portfolio website",
};
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
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

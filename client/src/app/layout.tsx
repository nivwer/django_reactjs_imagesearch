import type { Metadata } from "next";
import {  Cinzel } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar/Navbar";
import Background from "@/components/layout/Background/Background";
import Header from "@/components/layout/Header/Header";

// const inter = Inter({ subsets: ["latin"] });
const font = Cinzel({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Background />
          <Navbar />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

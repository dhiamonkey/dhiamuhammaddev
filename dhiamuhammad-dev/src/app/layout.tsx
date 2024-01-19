/* @client */ // Add this directive at the top of your file
"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RecoilProvider from "@/providers/RecoilProvider";
import NavBar from "@/components/organisms/NavBar";
import { ThemeProvider } from "@/providers/ThemesProvider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="asdasd"
            enableSystem
            disableTransitionOnChange
          >
            {/* TODO need to make ismobile function, and change navbar to mobile */}
            <NavBar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </RecoilProvider>
  );
}

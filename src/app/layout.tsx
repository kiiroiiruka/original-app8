import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SidebarPageSelector from "../components/SidebarPageSelector";
import { PAGES, SITE_METADATA } from "../constants/site"; //サイドメニュー項目とサイトメタデータをインポート
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = SITE_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = PAGES;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          <SidebarPageSelector pages={pages} />
          <main className="flex-1 ml-64">{children}</main>
        </div>
      </body>
    </html>
  );
}

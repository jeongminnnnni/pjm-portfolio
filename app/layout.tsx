import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Product Engineer | Bridging Art, Technology, and Business",
  description: "예술적 감각과 기술적 전문성으로 비즈니스의 문제를 해결하는 Product Engineer.",
  keywords: ["AI 서비스 기획", "웹 개발", "디자인", "UX 전략", "마케팅"],
  authors: [{ name: "Portfolio Owner" }],
  openGraph: {
    title: "Product Engineer | Bridging Art, Technology, and Business",
    description: "예술적 감각과 기술적 전문성으로 비즈니스의 문제를 해결하는 Product Engineer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

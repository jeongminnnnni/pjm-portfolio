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
  title: "The Logic Sculptor | Creative Technologist Portfolio",
  description: "예술공학을 전공한 프롬프트 엔지니어 + AI 서비스 개발자의 포트폴리오. 나의 코드는 예술이 되고, 나의 기획은 구조가 된다.",
  keywords: ["포트폴리오", "프롬프트 엔지니어", "AI 개발", "예술공학", "Creative Technologist"],
  authors: [{ name: "Portfolio Owner" }],
  openGraph: {
    title: "The Logic Sculptor | Creative Technologist Portfolio",
    description: "나의 코드는 예술이 되고, 나의 기획은 구조가 된다.",
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

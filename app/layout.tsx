import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "林知夏｜产品设计与策略",
  description: "一份不止一页纸的个人简历：实习、项目、技能与思考。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

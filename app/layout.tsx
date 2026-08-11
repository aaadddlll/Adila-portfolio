import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lin-zhixia-portfolio.ready-ghost-6190.chatgpt.site"),
  title: "阿迪莱 Adila｜个人网站",
  description: "阿迪莱 Adila 的个人网站：消费者洞察、品牌传播、整合营销经历与项目。",
  openGraph: {
    title: "阿迪莱 Adila｜个人网站",
    description: "Consumer Insight · Brand Marketing · Strategy",
  },
  twitter: {
    card: "summary",
    title: "阿迪莱 Adila｜个人网站",
    description: "Consumer Insight · Brand Marketing · Strategy",
  },
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

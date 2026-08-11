import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lin-zhixia-portfolio.ready-ghost-6190.chatgpt.site"),
  title: "阿迪莱 Adila｜个人网站",
  description: "阿迪莱 Adila 的个人介绍、实习经历、项目经历与技能。",
  openGraph: {
    title: "阿迪莱 Adila｜个人网站",
    description: "Product · Design · Strategy",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "阿迪莱 Adila 个人网站" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "阿迪莱 Adila｜个人网站",
    description: "Product · Design · Strategy",
    images: ["/og.png"],
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

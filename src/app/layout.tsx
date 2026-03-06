import type { Metadata, Viewport } from "next";
import "./globals.css";
import ScrollHandler from "@/components/ScrollHandler";

const SITE_URL = "https://www.20kaffnc.co.kr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "한국후계 농업경영인 전국대회",
  description:
    "대한민국 농업을 이끌어가는 한국후계 농업경영인들의 권익 대변과 발전을 위한 국내 최대 농민 단체 행사입니다. 제20회 한국후계 농업경영인 전국대회 일정 및 안내를 확인하세요.",
  applicationName: "한국후계 농업경영인 전국대회",
  keywords: [
    "한국후계 농업경영인",
    "농업경영인 전국대회",
    "제20회",
    "농경인",
    "한국후계",
    "농업경영인",
    "농민 단체",
    "한국 농업",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "한국후계 농업경영인 전국대회가 시작됩니다.",
    siteName: "한국후계 농업경영인 전국대회",
    description:
      "대한민국 농업을 이끌어가는 한국후계 농업경영인들의 권익 대변과 발전을 위한 국내 최대 농민 단체 행사입니다. 제20회 한국후계 농업경영인 전국대회 일정 및 안내를 확인하세요.",
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: "/opimage.png",
        width: 1200,
        height: 630,
        alt: "한국후계 농업경영인 전국대회",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "한국후계 농업경영인 전국대회가 시작됩니다.",
    description:
      "대한민국 농업을 이끌어가는 한국후계 농업경영인들의 권익 대변과 발전을 위한 국내 최대 농민 단체 행사입니다.",
    images: ["/opimage.png"],
  },
  verification: {
    google: "sLCH6Jlcv2Zkgxdxb1JKAzwQeszNKK9z8DhUZBvakGg",
    other: {
      "naver-site-verification": "e4d6d7a9edae9170d6332eb57a46ddd1facb9e68",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "한국후계 농업경영인 전국대회",
  url: `${SITE_URL}/`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        <h1
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            clip: "rect(1px, 1px, 1px, 1px)",
          }}
        >
          한국후계 농업경영인 전국대회
        </h1>
        <ScrollHandler />
        {children}
      </body>
    </html>
  );
}

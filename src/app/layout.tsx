import type { Metadata, Viewport } from "next";
import "./globals.css";
import ScrollHandler from "@/components/ScrollHandler";
import { JsonLdScript } from "next-seo";
import { getRootMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = getRootMetadata();

export const viewport: Viewport = {
  themeColor: "#000000",
};

const websiteJsonLd = {
  "@context": "https://schema.org" as const,
  "@type": "WebSite" as const,
  name: "한국후계 농업경영인 전국대회",
  url: `${SITE_URL}/`,
  alternateName: ["20kaffnc.co.kr", "www.20kaffnc.co.kr", "제20회 한국후계 농업경영인 전국대회"],
};

const organizationJsonLd = {
  "@context": "https://schema.org" as const,
  "@type": "Organization" as const,
  name: "한국후계 농업경영인 전국대회",
  url: SITE_URL,
  description:
    "대한민국 농업을 이끌어가는 한국후계 농업경영인들의 권익 대변과 발전을 위한 국내 최대 농민 단체 행사입니다.",
  image: `${SITE_URL}/opimage.png`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="robots" content="index, follow" />
        <JsonLdScript data={websiteJsonLd} scriptKey="website" />
        <JsonLdScript data={organizationJsonLd} scriptKey="organization" />
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

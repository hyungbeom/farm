import type { Metadata } from "next";

/**
 * 공통 SEO 설정 (Google · 네이버 대응)
 * - 네이버: 서치어드바이저 소유확인(naver-site-verification), Yeti 봇 허용(robots.ts), og:locale, sitemap 제출 권장
 */
export const SITE_URL = "https://www.20kaffnc.co.kr";

const MAIN_TITLE = "제20회 한국후계 농업경영인 전국대회 | 제주 행사 일정 및 안내";

export const defaultSeo = {
  title: MAIN_TITLE,
  titleTemplate: "%s | 제주 행사 일정 및 안내",
  defaultTitle: MAIN_TITLE,
  description:
    "대한민국 농업을 이끌어가는 한국후계 농업경영인들의 권익 대변과 발전을 위한 국내 최대 농민 단체 행사입니다. 제20회 한국후계 농업경영인 전국대회 일정 및 안내를 확인하세요.",
  canonical: SITE_URL,
  openGraph: {
    title: MAIN_TITLE,
    siteName: "제20회 한국후계 농업경영인 전국대회",
    description:
      "대한민국 농업을 이끌어가는 한국후계 농업경영인들의 권익 대변과 발전을 위한 국내 최대 농민 단체 행사입니다. 제20회 한국후계 농업경영인 전국대회 일정 및 안내를 확인하세요.",
    type: "website" as const,
    url: SITE_URL,
    locale: "ko_KR",
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
    card: "summary_large_image" as const,
    title: MAIN_TITLE,
    description:
      "대한민국 농업을 이끌어가는 한국후계 농업경영인들의 권익 대변과 발전을 위한 국내 최대 농민 단체 행사입니다.",
    images: ["/opimage.png"],
  },
  keywords: [
    "한국후계 농업경영인",
    "농업경영인 전국대회",
    "제20회",
    "2026",
    "농경인",
    "한국후계",
    "농업경영인",
    "농민 단체",
    "한국 농업",
  ],
};

/** 페이지별 SEO 옵션 */
export interface PageSeoOptions {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{ url: string; width?: number; height?: number; alt?: string }>;
  };
}

/**
 * next-seo 스타일 옵션을 Next.js Metadata로 변환
 * 레이아웃 기본값 + 페이지 오버라이드에 사용
 */
export function buildMetadata(options: PageSeoOptions = {}): Metadata {
  const {
    title,
    description,
    path = "",
    noIndex = false,
    openGraph: pageOg,
  } = options;

  const url = path ? `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}` : SITE_URL;
  const resolvedTitle = title ?? defaultSeo.defaultTitle;
  const resolvedDescription = description ?? defaultSeo.description;

  return {
    metadataBase: new URL(SITE_URL),
    title: resolvedTitle,
    description: resolvedDescription,
    keywords: defaultSeo.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageOg?.title ?? resolvedTitle,
      description: pageOg?.description ?? resolvedDescription,
      url,
      siteName: defaultSeo.openGraph.siteName,
      type: "website",
      locale: defaultSeo.openGraph.locale,
      images: pageOg?.images ?? defaultSeo.openGraph.images,
    },
    twitter: {
      card: "summary_large_image",
      title: pageOg?.title ?? resolvedTitle,
      description: pageOg?.description ?? resolvedDescription,
      images: pageOg?.images?.map((i) => i.url) ?? defaultSeo.twitter.images,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

/** 루트 레이아웃용 전체 메타데이터 (검증, 아이콘, title 템플릿 포함) */
export function getRootMetadata(): Metadata {
  return {
    ...buildMetadata(),
    title: {
      default: defaultSeo.defaultTitle,
      template: defaultSeo.titleTemplate,
    },
    applicationName: defaultSeo.defaultTitle,
    icons: { icon: "/favicon.svg" },
    manifest: "/manifest.json",
    verification: {
      google: "sLCH6Jlcv2Zkgxdxb1JKAzwQeszNKK9z8DhUZBvakGg",
      other: {
        "naver-site-verification": "e91dcbb116242b33cc190c675f9f48c4cc0acd84",
      },
    },
    robots: { index: true, follow: true },
  };
}

import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/** 사이트맵에 포함할 경로 (정적 경로) */
const ROUTES = [
  "",
  "/info/about",
  "/info/overview",
  "/info/schedule",
  "/info/tour",
  "/program/opening",
  "/program/trekking",
  "/program/stage",
  "/program/side",
  "/program/food",
  "/location/layout",
  "/location/map",
  "/location/transport",
  "/location/parking",
  "/board/notice",
  "/board/faq",
  "/board/qna",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL.replace(/\/$/, "");

  return ROUTES.map((path) => ({
    url: path ? `${baseUrl}${path}` : baseUrl,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : ("monthly" as const),
    priority: path === "" ? 1 : 0.8,
  }));
}

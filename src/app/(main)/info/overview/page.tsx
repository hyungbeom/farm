import Overview from "@/components/info/overview";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "대회 개요",
  description:
    "제20회 한국후계 농업경영인 전국대회 개요. 대회 목적, 주제, 일정 개요를 확인하세요.",
  path: "/info/overview",
});

export default function OverviewPage() {
  return <Overview />;
}

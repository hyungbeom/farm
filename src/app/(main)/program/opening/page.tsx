import Opening from "@/components/program/opening";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "개회식",
  description:
    "제20회 한국후계 농업경영인 전국대회 개회식 일정 및 안내. 개회식 프로그램을 확인하세요.",
  path: "/program/opening",
});

export default function OpeningPage() {
  return <Opening />;
}

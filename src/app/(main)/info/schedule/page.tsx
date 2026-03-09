import Schedule from "@/components/info/schedule";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "일정 안내",
  description:
    "제20회 한국후계 농업경영인 전국대회 일정. 세부 프로그램 일정을 확인하세요.",
  path: "/info/schedule",
});

export default function SchedulePage() {
  return <Schedule />;
}

import Faq from "@/components/board/faq";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "자주 묻는 질문",
  description:
    "제20회 한국후계 농업경영인 전국대회 자주 묻는 질문(FAQ). 참가 안내, 일정, 장소 등 FAQ를 확인하세요.",
  path: "/board/faq",
});

export default function FaqPage() {
  return <Faq />;
}

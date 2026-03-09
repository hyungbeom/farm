import Notice from "@/components/board/notice";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "공지사항",
  description:
    "제20회 한국후계 농업경영인 전국대회 공지사항. 대회 관련 최신 소식을 확인하세요.",
  path: "/board/notice",
});

export default function NoticePage() {
  return <Notice />;
}

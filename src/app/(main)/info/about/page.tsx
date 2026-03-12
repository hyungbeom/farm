import About from "@/components/info/about";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "대회 소개",
  description:
    "한국후계 농업경영인 전국대회 소개. 대한민국 농업을 이끌어가는 후계 농업경영인들의 권익 대변과 발전을 위한 국내 최대 농민 단체 행사입니다.",
  path: "/info/about",
});

export default function AboutPage() {
  return <About />;
}

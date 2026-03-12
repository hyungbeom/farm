import Map from "@/components/location/map";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "오시는 길·지도",
  description:
    "제20회 한국후계 농업경영인 전국대회 장소 및 오시는 길, 지도 안내.",
  path: "/location/map",
});

export default function MapPage() {
  return <Map />;
}

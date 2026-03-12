"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import HeaderMO from "./header_mo";
import { useMediaQuery } from "react-responsive";

export default function Layouts({ children }: { children: React.ReactNode }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const pathname = usePathname();
  const primaryColor = "#317E71";

  const [footerColor, setFooterColor] = useState<string | null>(null);

  const getPageTitle = (path: string) => {
    const titles: Record<string, string> = {
      "/info/about": "행사 안내",
      "/info/overview": "행사 개요",
      "/info/schedule": "행사 일정 안내",
      "/info/tour": "지역 관광 안내",
      "/program/opening": "개막식",
      "/program/stage": "무대 프로그램",
      "/program/side": "부대 프로그램",
      "/program/trekking": "트레킹 프로그램",
      "/location/map": "행사장 위치",
      "/location/layout": "행사장 배치도",
      "/location/parking": "주차 안내",
      "/location/transport": "대중교통 안내",
      // "/board/notice": "공지사항",
      "/board/faq": "자주하는 질문",
      "/board/qna": "Q&A",
    };
    return titles[path] || "행사 안내";
  };

  const pageTitle = getPageTitle(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (
      pathname?.includes("/location/layout") ||
      pathname?.includes("/location/transport")
    ) {
      document.body.style.backgroundColor = "#EBF5A8";
      setFooterColor("EBF5A8");
    } else if (pathname?.includes("/location")) {
      document.body.style.backgroundColor = "#EFF5B8";
      setFooterColor("EFF5B8");
    } else if (pathname?.includes("/stage")) {
      document.body.style.backgroundColor = "#16284C";
      setFooterColor("16284C");
    } else {
      document.body.style.backgroundColor = "#FFFFFF";
      setFooterColor("FFFFFF");
    }

    return () => {
      document.body.style.backgroundColor = "#FFFFFF";
      setFooterColor("FFFFFF");
    };
  }, [pathname]);

  return (
    <div style={{ minWidth: isMobile ? undefined : 1400 }}>
      {pathname === "/" ? (
        <div
          style={{
            paddingTop: 125,
            paddingBottom: isMobile ? 30 : 0,
            backgroundImage: "url(/background.png)",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          {isMobile ? (
            <HeaderMO back={false} />
          ) : (
            <Header back={false} />
          )}
          <img
            src={isMobile ? "/mo/main.png" : "/pc/main.png"}
            width={isMobile ? "90%" : "65%"}
            alt="한국후계 농업경영인"
          />
        </div>
      ) : (
        <>
          {isMobile ? <HeaderMO /> : <Header />}
        </>
      )}

      {pathname !== "/" && (
        <>
          <div
            style={{
              paddingTop: isMobile ? 60 : 100,
              backgroundImage:
                "linear-gradient(to right, #317E71 0%, #2A6256 21%, #214D43 37%, #1B3E37 53%, #193A33 66%)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={isMobile ? "/mo/subTitle.png" : "/pc/subTitle.png"}
              width={isMobile ? 250 : 700}
              style={{ paddingTop: isMobile ? 30 : 20 }}
              alt="한국후계 농업경영인"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: isMobile ? 30 : 50,
            }}
          >
            <div
              style={{
                width: 2,
                height: isMobile ? 30 : 40,
                backgroundColor: primaryColor,
                opacity: 0.5,
                marginBottom: 15,
              }}
            />
            <div
              style={{
                fontSize: isMobile ? 24 : 60,
                color: primaryColor,
                fontWeight: 400,
              }}
            >
              {pageTitle}
            </div>
          </div>
        </>
      )}

      <main
        style={{
          minWidth: isMobile ? undefined : 1400,
          padding:
            pathname === "/"
              ? 0
              : isMobile
                ? "0px 16px 100px 16px"
                : "0px 0px",
        }}
      >
        {children}
      </main>

      <Footer color={footerColor} />
    </div>
  );
}

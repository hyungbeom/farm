"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeaderMO({ back = true }: { back?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const menuData = [
    {
      title: "행사 안내",
      subMenus: [
        {
          name: (
            <span>
              한국후계농업
              <br />
              경영인이란?
            </span>
          ),
          path: "/info/about",
        },
        { name: "행사 개요", path: "/info/overview" },
        { name: "행사 일정 안내", path: "/info/schedule" },
        { name: "지역 관광 안내", path: "/info/tour" },
      ],
    },
    {
      title: "프로그램 안내",
      subMenus: [
        { name: "개막식", path: "/program/opening" },
        { name: "무대 프로그램", path: "/program/stage" },
        { name: "부대 프로그램", path: "/program/side" },
        { name: "트레킹 프로그램", path: "/program/trekking" },
      ],
    },
    {
      title: "오시는 길",
      subMenus: [
        { name: "행사장 위치", path: "/location/map" },
        { name: "행사장 배치도", path: "/location/layout" },
        { name: "주차 안내", path: "/location/parking" },
        { name: "대중교통 안내", path: "/location/transport" },
      ],
    },
    {
      title: "게시판",
      subMenus: [
        { name: "공지사항", path: "/board/notice" },
        { name: "자주하는 질문", path: "/board/faq" },
        { name: "Q&A", path: "/board/qna" },
      ],
    },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      setShouldRender(true);
    } else {
      const timeoutId = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timeoutId);
    }
  }, [isMenuOpen]);

  const handleMenuClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      style={{
        height: 60,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
      }}
    >
      <div
        style={{
          background: isMenuOpen || back ? "#0C2E5E" : "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 0px",
          width: "100%",
          color: "white",
          zIndex: 999,
          position: "relative",
          transition: "background 0.3s ease",
        }}
      >
        <div style={{ flex: 1, textAlign: "left", paddingLeft: 20 }}>
          <Link href="/">
            <img src="/left_logo.svg" width={210} alt="logo" />
          </Link>
        </div>

        <div
          style={{
            flex: 1,
            textAlign: "right",
            paddingRight: 20,
            cursor: "pointer",
          }}
          onClick={() => setIsMenuOpen(true)}
        >
          <img src="/burger.svg" alt="menu" />
        </div>
      </div>

      {shouldRender && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#0C2E5E",
            zIndex: 9999,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            opacity: isMenuOpen ? 1 : 0,
            transform: isMenuOpen ? "translateY(0)" : "translateY(-20px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "18px 0px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <div style={{ flex: 1, textAlign: "left", paddingLeft: 20 }}>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <img src="/left_logo.svg" width={210} alt="logo" />
              </Link>
            </div>

            <div
              style={{
                flex: 1,
                textAlign: "right",
                paddingRight: 20,
                cursor: "pointer",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {menuData.map((menu, index) => (
              <div
                key={index}
                style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}
              >
                <div
                  onClick={() => handleMenuClick(index)}
                  style={{
                    padding: "24px 0",
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: 600,
                    cursor: "pointer",
                    color: activeIndex === index ? "#F2C94C" : "white",
                    transition: "color 0.3s",
                  }}
                >
                  {menu.title}
                </div>

                <div
                  style={{
                    maxHeight: activeIndex === index ? "500px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <div style={{ padding: "10px 0 20px 0" }}>
                    {menu.subMenus.map((subMenu, subIndex) => (
                      <div
                        key={subIndex}
                        style={{
                          padding: "14px 0",
                          textAlign: "center",
                        }}
                      >
                        <Link
                          href={subMenu.path}
                          onClick={() => setIsMenuOpen(false)}
                          style={{
                            fontSize: 17,
                            color: "white",
                            fontWeight: 400,
                            textDecoration: "none",
                            display: "inline-block",
                            width: "100%",
                          }}
                        >
                          {subMenu.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: "40px 0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/right_logo.svg"
              alt="한농연 전국대회"
              style={{ width: 80, height: "auto" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

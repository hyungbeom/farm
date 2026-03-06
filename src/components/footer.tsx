"use client";

import { useMediaQuery } from "react-responsive";
import Link from "next/link";

export default function Footer({ color = "ffffff" }: { color?: string | null }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const waveColor = color || "ffffff";

  const waveSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23${waveColor}' fill-opacity='1' d='M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,224C840,245,960,267,1080,266.7C1200,267,1320,245,1380,234.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'%3E%3C/path%3E%3C/svg%3E`;

  return (
    <>
      {!isMobile ? (
        <div
          style={{
            position: "relative",
            background: `
                url("${waveSvg}") center top / 100% auto no-repeat,
                linear-gradient(90deg, #009CFF 0%, #009CFF 33%, #95CC26 83%, #95CC26 100%)
            `,
            padding: "400px 0px 80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 1400,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 30,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 24,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  padding: "20px 60px",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 30,
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#555",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                }}
              >
                <Link
                  href="/info/about"
                  style={{
                    fontWeight: 700,
                    color: "#333",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  행사안내
                </Link>
                <div>·</div>
                <Link
                  href="/program/opening"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  프로그램 안내
                </Link>
                <div>·</div>
                <Link
                  href="/location/map"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  오시는길
                </Link>
                <div>·</div>
                <Link
                  href="/board/notice"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  게시판
                </Link>
              </div>

              <div
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                style={{
                  backgroundColor: "#222",
                  color: "white",
                  width: 60,
                  height: 60,
                  borderRadius: 16,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 12,
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginBottom: 4 }}
                >
                  <line x1="12" y1="19" x2="12" y2="5"></line>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
                맨위로
              </div>
            </div>

            <div
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 14,
                lineHeight: 1.6,
                opacity: 0.9,
              }}
            >
              <div>
                (630) 제주특별자치도 제주시 새별오름 일원 | 전화 064 . 987 .
                6543
              </div>
              <div>
                Copyright © 2026 Korea Advanced Farmers Federation. All Rights
                Reserved
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            position: "relative",
            width: "100dvw",
            overflow: "hidden",
            background:
              "linear-gradient(90deg, #009CFF 0%, #009CFF 33%, #95CC26 83%, #95CC26 100%)",
            padding: "50px 20px",
            boxSizing: "border-box",
            fontFamily:
              "'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif",
            letterSpacing: "-0.5px",
          }}
        >
          <nav
            style={{
              width: "100%",
              boxSizing: "border-box",
              backgroundColor: "#ffffff",
              borderRadius: 30,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 15px",
              marginBottom: 50,
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <Link
              href="/info/about"
              style={{
                color: "#111111",
                fontSize: 13,
                fontWeight: 800,
                cursor: "pointer",
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
            >
              행사안내
            </Link>
            <Link
              href="/program/opening"
              style={{
                color: "#888888",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
            >
              프로그램 안내
            </Link>
            <Link
              href="/location/map"
              style={{
                color: "#888888",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
            >
              오시는길
            </Link>
            <Link
              href="/board/notice"
              style={{
                color: "#888888",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
            >
              게시판
            </Link>
          </nav>

          <div
            style={{
              color: "#ffffff",
              paddingRight: 80,
              boxSizing: "border-box",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 800, marginBottom: 12 }}>
              (630) 제주특별자치도 제주시 새별오름 일원
            </div>
            <div style={{ fontSize: 16, fontWeight: 400, marginBottom: 20 }}>
              전화 064 . 987 . 6543
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 400,
                opacity: 0.95,
                lineHeight: 1.4,
              }}
            >
              Copyright © 2026 Korea Advanced Farmers
              <br />
              Federation. All Rights Reserved
            </div>
          </div>

          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              position: "absolute",
              bottom: 40,
              right: 20,
              width: 65,
              height: 65,
              backgroundColor: "#1a1a1a",
              borderRadius: 16,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            <span
              style={{
                color: "#ffffff",
                fontSize: 12,
                fontWeight: 600,
                marginTop: 4,
              }}
            >
              맨위로
            </span>
          </div>
        </div>
      )}
    </>
  );
}

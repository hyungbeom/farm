"use client";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const SAMPLE_CONTENT = `안녕하세요. 한국후계농업경영인중앙연합회 회원입니다.

이번 가을에 진행되는 백제문화체험박물관 행사에 대해 문의드립니다. 가족들과 함께 방문할 예정인데, 어린이백제체험관 프로그램의 구체적인 시간표와 사전 예약이 필요한 체험이 있는지 알고 싶습니다.

또한, 단체 관람 시 할인 혜택이 적용되는지도 확인 부탁드립니다.`;

interface NoticeItem {
    id: number;
    title: string;
    date: string;
    content: string;
}

export default function Notice() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);

    const totalColor = '#245943';
    const activeColor = '#72B043';
    const borderColor = '#EAEAEA';
    const headerBg = '#F6F6F6';
    const darkText = '#222222';
    const grayText = '#888888';

    const noticeData: NoticeItem[] = [];

    const PageButton = ({ active, children }: { active: boolean; children: React.ReactNode }) => (
        <div style={{
            width: isMobile ? 36 : 40,
            height: isMobile ? 36 : 40,
            borderRadius: '50%',
            backgroundColor: active ? activeColor : '#FFFFFF',
            border: active ? 'none' : `1px solid ${borderColor}`,
            color: active ? '#FFFFFF' : darkText,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: isMobile ? 14 : 15,
            fontWeight: active ? 800 : 500,
            cursor: 'pointer'
        }}>
            {children}
        </div>
    );

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: isMobile ? '40px 0px 80px' : '80px 0px 120px',
            letterSpacing: '-0.5px'
        }}>
            {selectedNotice && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        padding: 20
                    }}
                    onClick={() => setSelectedNotice(null)}
                >
                    <div
                        style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: 12,
                            maxWidth: isMobile ? 560 : 720,
                            width: '100%',
                            maxHeight: '90vh',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={{ padding: '28px 28px 0' }}>
                            <div style={{
                                fontSize: 18,
                                fontWeight: 700,
                                color: '#111111',
                                lineHeight: 1.4,
                                marginBottom: 12
                            }}>
                                {selectedNotice.title}
                            </div>
                            <div style={{
                                fontSize: 14,
                                fontWeight: 400,
                                color: '#111111',
                                textAlign: 'right'
                            }}>
                                {selectedNotice.date}
                            </div>
                        </div>

                        <div style={{
                            flex: 1,
                            overflowY: 'auto',
                            padding: '20px 28px',
                            fontSize: 15,
                            lineHeight: 1.7,
                            color: '#111111',
                            whiteSpace: 'pre-wrap'
                        }}>
                            {selectedNotice.content}
                        </div>

                        <div style={{
                            padding: '24px 28px 28px',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <button
                                onClick={() => setSelectedNotice(null)}
                                style={{
                                    width: '100%',
                                    maxWidth: 200,
                                    padding: '14px 24px',
                                    backgroundColor: '#E8E8E8',
                                    border: 'none',
                                    borderRadius: 8,
                                    fontSize: 15,
                                    fontWeight: 500,
                                    color: '#111111',
                                    cursor: 'pointer'
                                }}
                            >
                                닫기
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div style={{ width: '100%', maxWidth: 1000 }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: 15,
                    fontSize: 15,
                    fontWeight: 800
                }}>
                    <span style={{ color: totalColor }}>Total</span>
                    <span style={{ color: grayText, margin: '0 8px' }}>·</span>
                    <span style={{ color: grayText, fontWeight: 500 }}>0</span>
                </div>

                <div>
                    {!isMobile && (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: headerBg,
                            padding: '18px 0',
                            borderBottom: `1px solid ${borderColor}`,
                            fontWeight: 800,
                            color: darkText,
                            fontSize: 16
                        }}>
                            <div style={{ width: '10%', textAlign: 'center' }}>순번</div>
                            <div style={{ width: 1, height: 14, backgroundColor: '#DDDDDD' }} />
                            <div style={{ flex: 1, textAlign: 'center' }}>제목</div>
                            <div style={{ width: 1, height: 14, backgroundColor: '#DDDDDD' }} />
                            <div style={{ width: '15%', textAlign: 'center' }}>등록일</div>
                        </div>
                    )}

                    {noticeData.map((item, idx) => (
                        <div key={idx}>
                            {!isMobile ? (
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '20px 0',
                                    borderBottom: `1px solid ${borderColor}`,
                                    cursor: 'pointer',
                                    transition: 'background 0.2s',
                                }}
                                     onClick={() => setSelectedNotice(item)}
                                     onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FAFAFA'; }}
                                     onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                                >
                                    <div style={{ width: '10%', textAlign: 'center', color: grayText }}>{item.id}</div>
                                    <div style={{ width: 1, height: 14, backgroundColor: '#EEEEEE' }} />
                                    <div style={{ flex: 1, paddingLeft: 40, color: darkText, fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {item.title}
                                    </div>
                                    <div style={{ width: 1, height: 14, backgroundColor: '#EEEEEE' }} />
                                    <div style={{ width: '15%', textAlign: 'center', color: grayText }}>{item.date}</div>
                                </div>
                            ) : (
                                <div style={{
                                    padding: '20px 0',
                                    borderBottom: `1px solid ${borderColor}`,
                                    cursor: 'pointer',
                                }}
                                    onClick={() => setSelectedNotice(item)}
                                >
                                    <div style={{ fontSize: 16, fontWeight: 600, color: darkText, marginBottom: 8 }}>
                                        {item.title}
                                    </div>
                                    <div style={{ fontSize: 14, color: grayText }}>{item.date}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";

export default function Section4() {
    const router = useRouter();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const [activeTab, setActiveTab] = useState('자주하는 질문');
    // const tabs = ['공지사항', '자주하는 질문'];
    const tabs = [ '자주하는 질문'];

    const boardData: Record<string, { id: number; title: string; date: string }[]> = {
        // '공지사항': [
        //     { id: 1, title: '2025년 백제문화체험박물관 및 어린이백제체험관 가을행사 안내', date: '2026.02.06' },
        //     { id: 2, title: '2025 어린이백제체험관 어린이날 행사 안내', date: '2026.02.06' },
        //     { id: 3, title: '2025년 하절기 운영 안내', date: '2026.02.06' },
        //     { id: 4, title: '어린이백제체험관 성탄절 행사 "백제꼬마의 크리스마스" 안내', date: '2026.02.06' },
        // ],
        '자주하는 질문': [
            { id: 1, title: '행사 일정과 장소가 어떻게 되나요?', date: '2026.02.05' },
            { id: 2, title: '행사장 입장료가 있나요?', date: '2026.02.04' },
            { id: 3, title: '주차장은 마련되어 있나요? 주차 요금은 얼마인가요?', date: '2026.02.03' },
            { id: 4, title: '대중교통을 이용해서 갈 수 있나요?', date: '2026.02.02' },
            { id: 5, title: '체험 프로그램은 사전에 예약해야 하나요? 참가비가 있나요?', date: '2026.02.03' },
            { id: 6, title: '부스 체험 프로그램 운영 시간은 언제인가요?', date: '2026.02.02' },
        ]
    };

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>

            <div style={{
                width: '100vw',
                padding: isMobile ? '80px 20px' : '200px 200px 0px 200px',
                boxSizing: 'border-box',
                overflow: 'hidden'
            }}>

                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: isMobile ? 'flex-start' : 'flex-end',
                    marginBottom: 30,
                    gap: isMobile ? 20 : 0
                }}>
                    <div style={{ fontSize: isMobile ? 36 : 46, fontWeight: 900, color: '#2F4F42', letterSpacing: '-1px' }}>
                        알려드립니다
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 15, fontSize: isMobile ? 15 : 17 }}>
                        {tabs.map((tab) => (
                            <div key={tab} style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                                <span
                                    onClick={() => setActiveTab(tab)}
                                    style={{
                                        cursor: 'pointer',
                                        fontWeight: activeTab === tab ? 800 : 400,
                                        color: activeTab === tab ? '#111' : '#888',
                                        transition: 'color 0.2s',
                                        lineHeight: 1.35,
                                        display: 'inline-block'
                                    }}
                                >
                                    {tab}
                                </span>

                            </div>
                        ))}
                    </div>
                </div>

                <div
                    onClick={() => router.push(activeTab === '공지사항' ? '/board/notice' : '/board/faq')}
                    style={{
                        borderTop: '2px solid #eaeaea',
                        cursor: 'pointer'
                    }}
                >
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                        width: '100%'
                    }}>
                        {boardData[activeTab].map((item, index) => (
                            <div key={item.id} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: isMobile ? '20px 0' : '30px 40px',
                                borderBottom: '1px solid #eaeaea',
                                borderRight: (!isMobile && index % 2 === 0) ? '1px solid #eaeaea' : 'none',
                                width: '100%',
                                boxSizing: 'border-box'
                            }}>
                                <div style={{
                                    flex: 1,
                                    minWidth: 0,
                                    fontSize: 16,
                                    color: '#333',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    paddingRight: 20
                                }}>
                                    {item.title}
                                </div>
                                <div style={{ fontSize: 15, color: '#999', flexShrink: 0 }}>
                                    {item.date}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                    <div
                        onClick={() => router.push(activeTab === '공지사항' ? '/board/notice' : '/board/faq')}
                        style={{
                        backgroundColor: '#1E2B4D',
                        color: 'white',
                            padding: '10px 24px',
                            borderRadius: '30px',
                        fontSize: 15,
                        fontWeight: 400,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        boxShadow: '0 4px 10px rgba(30, 43, 77, 0.2)'
                    }}>
                        더 보러가기
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    );
}

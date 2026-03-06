"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";

export default function Section4() {
    const router = useRouter();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const [activeTab, setActiveTab] = useState('공지사항');
    const tabs = ['공지사항', '자주하는 질문'];

    const boardData: Record<string, { id: number; title: string; date: string }[]> = {
        '공지사항': [],
        '자주하는 질문': [],
        'Q&A': []
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
                                        transition: 'color 0.2s'
                                    }}
                                >
                                    {tab}
                                </span>

                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ borderTop: '2px solid #eaeaea' }}>
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
                        onClick={() => router.push('/board/notice')}
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

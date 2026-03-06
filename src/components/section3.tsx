"use client";

import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Section3() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [activeTab, setActiveTab] = useState('개막식');
    const router = useRouter();
    const titleColor = '#254A5E';
    const textColor = '#FFFFFF';
    const yellowColor = '#FFE822';
    const buttonBgColor = '#122345';

    const day1Artists = [
        { name: '손빈아', img: '/singer/singer1.png' },
        { name: '우연이', img: '/singer/singer2.png' },
        { name: '조항조', img: '/singer/singer3.png' },
        { name: '설하윤', img: '/singer/singer4.png' }
    ];

    const day2Artists = [
        { name: '천록담', img: '/singer/singer5.png' },
        { name: '태군 노래자랑', img: '/singer/singer6.png' },
    ];

    return (
        <div >
            {!isMobile && <div style={{ backgroundColor: '#EAEC71' }}>
                <img src="/pc/step1.png" width={'100%'} alt="한국후계 농업경영인" style={{ display: 'block' }} />
            </div>}

            <div style={{
                marginTop: -5,
                width: '100%',
                background: 'linear-gradient(to bottom, #9FCB39, #6FBA2C)',
                display: 'flex',
                justifyContent: 'center',
                padding: isMobile ? '60px 20px' : '100px 20px',
                boxSizing: 'border-box'
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: 1200,
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? 50 : 32,
                }}>
                    <div style={{ width: isMobile ? '100%' : 356, flexShrink: 0 }}>
                        <div style={{
                            fontSize: isMobile ? 32 : 52,
                            fontWeight: 900,
                            color: titleColor,
                            lineHeight: 1.2,
                            letterSpacing: '-2px',
                            textAlign : isMobile ? 'center' : 'left'
                        }}>
                            프로그램 {!isMobile ?<br/> : <></>}
                            <span style={{ fontWeight: 300 }}>안내</span>
                        </div>
                        <div style={{ margin : `${isMobile ? 40 : 60}px ${isMobile ? 'auto' : ''}`,  width: 72, height: 2, background: 'linear-gradient(90deg, rgba(243, 152, 0, 1) 26%, rgba(244, 161, 10, 1) 45%, rgba(248, 186, 37, 1) 76%, rgba(253, 210, 63, 1) 100%)', marginBottom: 84 }} />

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                            {isMobile ? [] : ['개막식', '무대 프로그램'].map((tab) => (
                                <div
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    style={{
                                        fontSize: 24,
                                        fontWeight: activeTab === tab ? 800 : 400,
                                        color: activeTab === tab ? textColor : 'rgba(255,255,255,0.6)',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {tab}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ flex: 1 }}>
                        {activeTab === '개막식' && (
                            <div style={{ animation: 'fadeIn 0.5s ease', marginTop : -10 }}>
                                <div style={{ fontSize: isMobile ? 24 : 32, fontWeight: 800, color: titleColor, marginBottom: 32 }}>
                                    개막식
                                    <>{isMobile ? <br/> : <></>}</>
                                    (Opening Ceremony)
                                </div>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 20,
                                    color: textColor,
                                    marginBottom: 60,
                                    borderLeft: isMobile ? 'none' : '2px solid rgba(42, 98, 86, 0.4)',
                                    paddingLeft: isMobile ? 0 :  20
                                }}>
                                    {[
                                        { label: '기간', value: '2026. 03. 31. 화요일' },
                                        { label: '시간', value: '18:00 - 20:00' },
                                        { label: '장소', value: '제주시 새별오름 일원' },
                                        { label: '주요내용', value: '제20회 한국후계농업경영인 전국대회의 시작을 알리는 공식 행사로, 식전공연을\n시작으로 개회 선언, 환영 인사 및 개막 퍼포먼스가 진행됩니다.' },
                                        { label: '주최·주관', value: '(사)한국후계농업경영인중앙연합회' },
                                    ].map((item, idx) => (
                                        <div key={idx} style={{ display: 'flex', fontSize: isMobile ? 14 :  20,lineHeight: isMobile ? 1.2 :  1.5 }}>
                                            <div style={{ width: 90, fontWeight: 'bold', flexShrink: 0 }}>{item.label}</div>
                                            <div style={{ flex: 1, whiteSpace: 'pre-line', fontWeight: isMobile ? 300 : 'medium', opacity: isMobile ? 1 : 0.9, paddingLeft : 12}}>{item.value}</div>
                                        </div>
                                    ))}
                                </div>

                                {isMobile ? <></> : <div style={{fontSize: 32, fontWeight: 800, color: titleColor, marginBottom: 20}}>
                                    개막식 프로그램 안내
                                </div>}

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: isMobile ? 16 : 20,
                                }}>
                                    {[
                                        { title: '제주농요', img: '/info9.png' },
                                        { title: '개막식', img: '/info10.png' },
                                        { title: '레이저쇼', img: '/info11.png' }
                                    ].map((card, idx) => (
                                        <div key={idx} style={{
                                            backgroundColor: 'white',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                        }}>
                                            <div style={{
                                                height: 180,
                                                backgroundImage: `url(${card.img})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }} />
                                            <div style={{
                                                padding: '18px 0',
                                                textAlign: 'center',
                                                fontSize: isMobile ? 14 : 18,
                                                fontWeight: 800,
                                                color: titleColor
                                            }}>
                                                {card.title}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {isMobile ?   <div
                                    onClick={() => router.push('/program/opening')}
                                    style={{
                                        margin : '60px auto',
                                        backgroundColor: buttonBgColor,
                                        color: 'white',
                                        padding: '8px 20px',
                                        borderRadius: '24px',
                                        alignItems: 'center',
                                        display : 'flex',
                                        justifyContent: 'center',
                                        gap: 10,
                                        width: 'fit-content',
                                        fontSize: 16,
                                        fontWeight: 500,
                                        cursor: 'pointer',
                                        boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                                    }}>
                                    자세히 보러가기
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </div>
                                 : <></>}
                            </div>
                        )}

                        {activeTab === '무대 프로그램' && (
                            <div style={{ animation: 'fadeIn 0.5s ease'  }}>
                                <div style={{ position: 'relative', width: '100%' }}>
                                        {!isMobile && (
                                            <div style={{
                                                position: 'absolute',
                                                left: '138px',
                                                top: '14px',
                                                bottom: '0',
                                                width: '2px',
                                                backgroundColor: 'rgba(255,255,255,0.3)',
                                                zIndex: 1
                                            }} />
                                        )}

                                        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 15 : 30, position: 'relative', zIndex: 2 }}>
                                            <div style={{ width: isMobile ? 'auto' : 150, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, flexShrink: 0 }}>
                                                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: isMobile ? 'flex-start' : 'space-between', gap: 10, width: '100%' }}>
                                                    <div style={{ fontSize: 40, fontWeight: 800, color: yellowColor }}>1일차</div>
                                                    {!isMobile && <div style={{ width: 9, height: 9, borderRadius: '50%', border: `11px solid ${yellowColor}`, backgroundColor: '#8BC34A', marginTop: 8, flexShrink: 0 }} />}
                                                </div>
                                                <div style={{ color: textColor, fontSize: 21, fontWeight: 600, lineHeight: 1.4 }}>
                                                    <div>20:00~</div>
                                                    <div>22:00</div>
                                                </div>
                                            </div>
                                            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, minmax(0, 1fr))' : 'repeat(4, minmax(0, 1fr))', gap: isMobile ? 15 : 20 }}>
                                                {day1Artists.map((artist, idx) => (
                                                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                                                        <div style={{
                                                            width: '100%',
                                                            aspectRatio: '3/4',
                                                            borderRadius: '16px',
                                                            backgroundImage: `url(${artist.img})`,
                                                            backgroundSize: 'cover',
                                                            backgroundPosition: 'center',
                                                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                                                        }} />
                                                        <div style={{ color: textColor, fontSize: 25, fontWeight: 400 }}>{artist.name}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 15 : 30, position: 'relative', zIndex: 2, marginTop : 100 }}>
                                            <div style={{ width: isMobile ? 'auto' : 150, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, flexShrink: 0 }}>
                                                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: isMobile ? 'flex-start' : 'space-between', gap: 10, width: '100%' }}>
                                                    <div style={{ fontSize: 40, fontWeight: 800, color: yellowColor }}>2일차</div>
                                                    {!isMobile && <div style={{ width: 9, height: 9, borderRadius: '50%', border: `11px solid ${yellowColor}`, backgroundColor: '#8BC34A', marginTop: 8, flexShrink: 0 }} />}
                                                </div>
                                                <div style={{ color: textColor, fontSize: 24, fontWeight: 600, lineHeight: 1.4 }}>
                                                    <div>13:00~</div>
                                                    <div>17:00</div>
                                                </div>
                                            </div>
                                            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, minmax(0, 1fr))' : 'repeat(4, minmax(0, 1fr))', gap: isMobile ? 15 : 20 }}>
                                                {day2Artists.map((artist, idx) => (
                                                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                                                        <div style={{
                                                            width: '100%',
                                                            aspectRatio: '3/4',
                                                            borderRadius: '16px',
                                                            backgroundImage: `url(${artist.img})`,
                                                            backgroundSize: 'cover',
                                                            backgroundPosition: 'center',
                                                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                                                        }} />
                                                        <div style={{ color: textColor, fontSize: 25, fontWeight: 400 }}>{artist.name}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {!isMobile && <img src="/pc/step2.png" width={'100%'} alt="한국후계 농업경영인" style={{ display: 'block', marginTop: -5 }} />}

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}

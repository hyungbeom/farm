"use client";

import { useMediaQuery } from "react-responsive";

export default function Stage() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const innerBgColor = '#1F3A68';
    const yellowColor = '#F9C021';
    const textColor = '#FFFFFF';

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
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: isMobile ? '40px 0px 80px' : '80px 0px 120px',
            letterSpacing: '-0.5px',
            boxSizing: 'border-box'
        }}>
            <div style={{
                width: '100%',
                maxWidth: 1400,
                backgroundColor: innerBgColor,
                borderRadius: isMobile ? '16px' : '24px',
                padding: isMobile ? '40px 20px' : '60px 80px',
                boxSizing: 'border-box'
            }}>
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: isMobile ? 40 : 60 }}>
                    {!isMobile && (
                        <div style={{
                            position: 'absolute',
                            left: '134px',
                            top: '20px',
                            bottom: '0',
                            width: '2px',
                            backgroundColor: 'rgba(255,255,255,0.3)',
                            zIndex: 1
                        }} />
                    )}

                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 15 : 30, position: 'relative', zIndex: 2 }}>
                        <div style={{ width: isMobile ? '100%' : 150, display: 'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: isMobile ? 'center' : 'flex-start', gap: isMobile ? 12 : 8, flexShrink: 0 }}>
                            {isMobile ? (
                                <>
                                    <div style={{ fontSize: 24, fontWeight: 800, color: yellowColor }}>1일차</div>
                                    <div style={{ color: textColor, fontSize: 16, fontWeight: 600 }}>20:00~22:00</div>
                                    <div style={{ flex: 1, minWidth: 20, height: 1, backgroundColor: 'rgba(255,255,255,0.5)' }} />
                                </>
                            ) : (
                                <>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10, width: '100%' }}>
                                        <div style={{ fontSize: 40, fontWeight: 800, color: yellowColor }}>1일차</div>
                                        <div style={{ width: 9, height: 9, borderRadius: '50%', border: `11px solid ${yellowColor}`, backgroundColor: '#8BC34A', marginTop: 8, flexShrink: 0 }} />
                                    </div>
                                    <div style={{ color: textColor, fontSize: 21, fontWeight: 600, lineHeight: 1.4 }}>
                                        <div>20:00~</div>
                                        <div>22:00</div>
                                    </div>
                                </>
                            )}
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

                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 15 : 30, position: 'relative', zIndex: 2, marginTop: 100 }}>
                        <div style={{ width: isMobile ? '100%' : 150, display: 'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: isMobile ? 'center' : 'flex-start', gap: isMobile ? 12 : 8, flexShrink: 0 }}>
                            {isMobile ? (
                                <>
                                    <div style={{ fontSize: 24, fontWeight: 800, color: yellowColor }}>2일차</div>
                                    <div style={{ color: textColor, fontSize: 16, fontWeight: 600 }}>13:00~18:00</div>
                                    <div style={{ flex: 1, minWidth: 20, height: 1, backgroundColor: 'rgba(255,255,255,0.5)' }} />
                                </>
                            ) : (
                                <>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10, width: '100%' }}>
                                        <div style={{ fontSize: 40, fontWeight: 800, color: yellowColor }}>2일차</div>
                                        <div style={{ width: 9, height: 9, borderRadius: '50%', border: `11px solid ${yellowColor}`, backgroundColor: '#8BC34A', marginTop: 8, flexShrink: 0 }} />
                                    </div>
                                    <div style={{ color: textColor, fontSize: 24, fontWeight: 600, lineHeight: 1.4 }}>
                                        <div>13:00~</div>
                                        <div>18:00</div>
                                    </div>
                                </>
                            )}
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
        </div>
    );
}

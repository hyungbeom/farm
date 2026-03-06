"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';

export default function ExpandingCards() {
    const [activeIndex, setActiveIndex] = useState(0);
    const router = useRouter();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const cards = [
        { id: 0, title: "한국후계\n농업경영인이란?", bgImage: "/pc/sub1.jpg", path: "/info/about" },
        { id: 1, title: "행사\n개요", bgImage: "/card1.png", path: "/info/overview" },
        { id: 2, title: "행사\n일정\n안내", bgImage: "/card3.png", path: "/info/schedule" },
        { id: 3, title: "지역\n관광\n안내", bgImage: "/card2.png", path: "/info/tour" },
    ];

    return (
        <div style={{
            display: isMobile ? 'grid' : 'flex',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'none',
            gap: 16,
            height: isMobile ? 'auto' : '400px',
            width: '100%',
            margin: '0 auto',
        }}>
            {cards.map((card, index) => {
                const isActive = isMobile ? true : activeIndex === index;

                return (
                    <div
                        key={card.id}
                        onClick={() => router.push(card.path)}
                        onMouseEnter={() => !isMobile && setActiveIndex(index)}
                        style={{
                            position: 'relative',
                            flex: isMobile ? 'auto' : (isActive ? 4 : 1),
                            height: isMobile ? '160px' : '100%',
                            borderRadius: isMobile ? '16px' : '24px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transition: 'flex 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), filter 0.5s ease',
                            filter: isMobile ? 'grayscale(0%)' : (isActive ? 'grayscale(0%)' : 'grayscale(100%)'),
                            backgroundImage: `url(${card.bgImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)'
                        }} />

                        <div style={{
                            position: 'absolute',
                            bottom: isMobile ? '20px' : '60px',
                            left: isMobile ? '50%' : (isActive ? '60px' : '50%'),
                            transform: isMobile ? 'translateX(-50%)' : (isActive ? 'none' : 'translateX(-50%)'),
                            width: '100%',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: isMobile ? '20px' : (isActive ? '44px' : '32px'),
                            lineHeight: '1.4',
                            whiteSpace: 'pre-line',
                            textAlign: isMobile ? 'center' : (isActive ? 'left' : 'center'),
                            transition: 'all 0.5s ease',
                            zIndex: 10
                        }}>
                            {card.title}
                        </div>

                        {!isMobile && (
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                width: '40px',
                                height: '40px',
                                backgroundColor: 'white',
                                borderRadius: '50%',
                                opacity: isActive ? 1 : 0,
                                transform: isActive ? 'scale(1)' : 'scale(0)',
                                transition: 'all 0.4s ease 0.1s',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 10
                            }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

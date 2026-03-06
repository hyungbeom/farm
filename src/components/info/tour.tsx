"use client";

import { useMediaQuery } from "react-responsive";

export default function Tour() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const tourData = [
        {
            prefix: "제주",
            boldText: "관광지 안내",
            imgSrc: "/info7.png" ,
            link : 'https://www.visitjeju.net/kr'
        },
        {
            prefix: "제주",
            boldText: "전통시장 안내",
            imgSrc: "/info8.png",
            link : 'https://www.visitjeju.net/kr/detail/list?menuId=DOM_000001720000000000&cate1cd=cate0000000003#p1&pageSize=12&sortListType=likecnt&viewType=list&isShowBtag'
        }
    ];

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            letterSpacing: '-0.5px'
        }}>
            <div style={{
                backgroundColor: '#F6F6F6',
                borderRadius: isMobile ? '24px' : '16px',
                padding: isMobile ? '40px 20px' : '60px 50px',
                width: '100%',
                maxWidth: 900,
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '40px' : '30px',
                boxSizing: 'border-box'
            }}>
                {tourData.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease',
                        }}
                        onClick={() => typeof window !== 'undefined' && window.open(item.link, '_blank')}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                        <img
                            src={item.imgSrc}
                            alt={`${item.prefix} ${item.boldText}`}
                            style={{
                                width: '100%',
                                aspectRatio: isMobile ? '4/3' : '3/4',
                                objectFit: 'cover',
                                borderRadius: isMobile ? '20px' : '16px',
                                marginBottom: isMobile ? '20px' : '24px',
                                boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
                            }}
                        />
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            color: '#111111',
                            fontSize: isMobile ? '22px' : '24px'
                        }}>
                            <div>
                                <span style={{ fontWeight: 500 }}>{item.prefix} </span>
                                <span style={{ fontWeight: 900 }}>{item.boldText}</span>
                            </div>
                            <svg
                                width={isMobile ? "18" : "20"}
                                height={isMobile ? "18" : "20"}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

"use client";

import {useMediaQuery} from "react-responsive";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Section2() {
    const router = useRouter();
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});

    const [activeMenu, setActiveMenu] = useState('행사장 위치');

    const titleColor = '#245943';
    const activeMenuColor = '#549B35';
    const inactiveMenuColor = '#90BB4D';
    const buttonBgColor = '#122345';

    return (
        <div style={{
            backgroundColor: '#EAEC71',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div style={{
                width: '100%',
                maxWidth: 1200,
                padding: isMobile ? '60px 20px 80px' : '150px 0px',
                boxSizing: 'border-box'
            }}>

                {!isMobile ? (
                    <div style={{
                        display: 'flex',
                        gap: 32,
                        alignItems: 'stretch',
                    }}>

                        <div style={{
                            width: 365,
                            flexShrink: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                            <div>
                                <div style={{
                                    fontSize: 60,
                                    fontWeight: "bold",
                                    color: titleColor,
                                    letterSpacing: '-2px'
                                }}>
                                    오시는 길
                                </div>

                                <div style={{
                                    width: 72,
                                    height: 2,
                                    background: 'linear-gradient(90deg, rgba(243, 152, 0, 1) 26%, rgba(244, 161, 10, 1) 45%, rgba(248, 186, 37, 1) 76%, rgba(253, 210, 63, 1) 100%)',
                                    marginTop: 60,
                                    marginBottom: 84
                                }}/>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 40,
                                    fontSize: 24,
                                    fontWeight: 'bold',
                                    cursor: 'pointer'
                                }}>
                                    <div
                                        onClick={() => setActiveMenu('행사장 위치')}
                                        style={{color: activeMenu === '행사장 위치' ? activeMenuColor : inactiveMenuColor}}
                                    >
                                        행사장 위치
                                    </div>
                                    <div
                                        onClick={() => setActiveMenu('행사장 세부 위치')}
                                        style={{color: activeMenu === '행사장 세부 위치' ? activeMenuColor : inactiveMenuColor}}
                                    >
                                        행사장 세부 위치
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div
                                    onClick={() => router.push('/location/map')}
                                    style={{
                                        backgroundColor: buttonBgColor,
                                        color: 'white',
                                        padding: '15px 24px',
                                        borderRadius: '30px',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: 10,
                                        width: 'fit-content',
                                        fontSize: 15,
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                                    }}>
                                    자세히 보러가기
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginRight: -80
                        }}>
                            <div key={activeMenu} className="section2-map-enter" style={{ width: '100%' }}>
                                {activeMenu === '행사장 위치' ? (
                                    <img src="/map.png" style={{width: 'calc(100% + 80px)', display: 'block'}}
                                         alt="행사장 위치 지도"/>
                                ) : (
                                    <img src="/map3.png" style={{width: 'calc(100% + 80px)', display: 'block'}}
                                         alt="행사장 세부 위치 약도"/>
                                )}
                            </div>
                        </div>

                    </div>
                ) : (
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30}}>
                        <img src="/map2.png" style={{width: '100%', display: 'block'}} alt="행사장 위치 지도"/>

                        <div
                            onClick={() => router.push('/location/map')}
                            style={{
                                backgroundColor: buttonBgColor,
                                color: 'white',
                                padding: '8px 12px',
                                borderRadius: '24px',
                                display: 'inline-flex',
                                alignItems: 'center',
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
                    </div>
                )}

            </div>

        </div>
    );
}

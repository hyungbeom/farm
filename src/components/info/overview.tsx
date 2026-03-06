"use client";

import { useMediaQuery } from "react-responsive";

export default function Overview() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const titleColor = 'rgba(111, 186, 44, 1)';
    const darkText = '#111111';
    const pcTitle = '"제20회 한국후계농업경영인 전국대회"';
    const grayText = '#777777';

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: isMobile ? '50px 0px 80px' : '100px 0px 0px',
            letterSpacing: '-0.5px'
        }}>
            <div style={{
                width: '100%',
                maxWidth: 1500,
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'center' : 'flex-start',
                gap: isMobile ? 40 : 120
            }}>
                <div style={{
                    width: isMobile ? '100%' : '38%',
                    flexShrink: 0
                }}>
                    <img
                        src="/info2.png"
                        alt="제20회 한국후계농업경영인 전국대회 포스터"
                        style={{
                            width: '100%',
                            display: 'block',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            borderRadius: '4px'
                        }}
                    />
                </div>

                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%'
                }}>
                    <div style={{
                        fontSize: isMobile ? 32 : 44,
                        fontWeight: 900,
                        color: titleColor,
                        lineHeight: 1.2,
                        marginBottom: 15,
                        wordBreak: 'keep-all'
                    }}>
                        {isMobile ? (
                            <>
                                "제20회<br/>
                                한국후계농업경영인<br/>
                                전국대회"
                            </>
                        ) : (
                            <>{pcTitle}</>
                        )}
                    </div>

                    <div style={{
                        fontSize: isMobile ? 20 : 32,
                        color: grayText,
                        fontWeight: 500,
                        marginBottom: isMobile ? 30 : 40,
                        paddingBottom: isMobile ? 20 : 30,
                        borderBottom: '1px solid #EAEAEA'
                    }}>
                        다함께 미래로, 빛나는 한농연
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                        <div style={{ display: 'flex', gap: 20 , fontSize: isMobile ? 14 : 20}}>
                            <div style={{ width: 100, fontWeight: 800, color: darkText, flexShrink: 0, paddingTop : 8 }}>행사기간</div>
                            <div style={{ color: grayText }}>2026.03.31(화) ~ 04.02.(목)</div>
                        </div>

                        <div style={{ display: 'flex', gap: 20 ,  fontSize: isMobile ? 14 : 20}}>
                            <div style={{ width: 100,  fontWeight: 800, color: darkText, flexShrink: 0 , paddingTop : 8}}>장소</div>
                            <div style={{ color: grayText }}>제주특별자치도 제주시 새별오름 일원</div>
                        </div>

                        <div style={{ display: 'flex', gap: 20 }}>
                            <div style={{ width: 100,  fontSize: isMobile ? 14 : 20, fontWeight: 800, color: darkText, flexShrink: 0, paddingTop : 8 }}>목적</div>
                            <div style={{ flex: 1, fontSize: 20, color: grayText,  wordBreak: 'keep-all' }}>
                                <div style={{ marginBottom: 12 }}>
                                    한국후계농업경영인 회원 및 가족들의 결속과 단합으로 농업농촌 발전 주도
                                </div>
                                <div style={{ marginBottom: 12 }}>
                                    국내 농업의 중요성과 위기에 대한 대국민적인 공감대 형성 기회 마련
                                </div>
                                <div>
                                    농어촌산업 육성 관련 중앙·지방 공무원, 전문가, 기업인, 지역 리더가 참여하여 정보교환 및 벤치마킹이 가능한 교류의 장 마련
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

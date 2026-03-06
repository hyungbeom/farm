"use client";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Schedule() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [activeTab, setActiveTab] = useState(1);

    if (!isMobile) {
        return (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <img src="/info3.png" style={{ width: '100%', maxWidth: 1400, display: 'block' }} alt="행사 일정 안내" />
            </div>
        );
    }

    return (
        <div style={{
            width: '100%',
            padding: '20px 20px 80px',
            boxSizing: 'border-box',
            letterSpacing: '-0.5px'
        }}>
            <div style={{
                backgroundColor: '#F5F5F5',
                borderRadius: '16px',
                padding: '24px',
                marginBottom: '30px'
            }}>
                <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontSize: '16px', fontWeight: 900, color: '#111', marginBottom: '4px' }}>행사기간</div>
                    <div style={{ fontSize: '15px', color: '#333' }}>2026년 3월 31일 ~ 2026년 4월 02일</div>
                </div>
                <div>
                    <div style={{ fontSize: '16px', fontWeight: 900, color: '#111', marginBottom: '4px' }}>부대프로그램</div>
                    <div style={{ fontSize: '15px', color: '#333' }}>4월 01일 까지 진행</div>
                </div>
            </div>

            <div style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '30px'
            }}>
                <div
                    onClick={() => setActiveTab(1)}
                    style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '12px 0',
                        borderRadius: '30px',
                        fontSize: '15px',
                        fontWeight: 800,
                        color: 'white',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        background: activeTab === 1 ? 'linear-gradient(to right, #C6DD59, #8DC141)' : '#C4C4C4'
                    }}
                >
                    1일차
                </div>

                <div
                    onClick={() => setActiveTab(2)}
                    style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '12px 0',
                        borderRadius: '30px',
                        fontSize: '15px',
                        fontWeight: 800,
                        color: 'white',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        background: activeTab === 2 ? 'linear-gradient(to right, #F9CD48, #F3A936)' : '#C4C4C4'
                    }}
                >
                    2일차
                </div>

                <div
                    onClick={() => setActiveTab(3)}
                    style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '12px 0',
                        borderRadius: '30px',
                        fontSize: '15px',
                        fontWeight: 800,
                        color: 'white',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        background: activeTab === 3 ? 'linear-gradient(to right, #5AB1F5, #90EDF6)' : '#C4C4C4'
                    }}
                >
                    3일차
                </div>
            </div>

            <div style={{ width: '100%', animation: 'fadeIn 0.3s ease-in-out', marginTop : 50 }}>
                {activeTab === 1 && (
                    <img src="/info4.png" style={{ width: '100%', display: 'block' }} alt="1일차 일정" />
                )}

                {activeTab === 2 && (
                    <img src="/info5.png" style={{ width: '100%', display: 'block' }} alt="2일차 일정" />
                )}

                {activeTab === 3 && (
                    <img src="/info6.png" style={{ width: '100%', display: 'block' }} alt="3일차 일정" />
                )}
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}

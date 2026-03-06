"use client";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";

interface FaqItem {
    id: number;
    question: string;
    answer: string;
}

export default function Faq() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [openId, setOpenId] = useState<number | null>(null);

    const darkText = '#111111';
    const grayText = '#333333';
    const borderColor = '#EAEAEA';
    const activeBorderColor = '#F39C12';
    const activeIconColor = '#C0392B';

    const faqData: FaqItem[] = [];

    const toggleFaq = (id: number) => {
        if (openId === id) {
            setOpenId(null);
        } else {
            setOpenId(id);
        }
    };

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: isMobile ? '40px 0px 80px' : '80px 0px 120px',
            letterSpacing: '-0.5px'
        }}>
            <div style={{ width: '100%', maxWidth: 1000 }}>
                <div style={{ borderTop: `1px solid ${borderColor}` }}>
                    {faqData.map((item) => {
                        const isOpen = openId === item.id;

                        return (
                            <div key={item.id} style={{ borderBottom: `1px solid ${borderColor}` }}>
                                <div
                                    onClick={() => toggleFaq(item.id)}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: isMobile ? '25px 0' : '30px 10px',
                                        cursor: 'pointer',
                                        fontSize: isMobile ? 18 : 17,
                                        fontWeight: isMobile ? 800 : 500,
                                        color: darkText
                                    }}
                                >
                                    <div style={{ flex: 1, paddingRight: 20, lineHeight: 1.4, wordBreak: 'keep-all' }}>
                                        {item.question}
                                    </div>
                                    <div style={{
                                        fontSize: isMobile ? 28 : 24,
                                        fontWeight: 300,
                                        color: isOpen ? activeIconColor : darkText,
                                        transform: isOpen ? 'translateY(-2px)' : 'none',
                                        transition: 'all 0.2s ease',
                                        userSelect: 'none'
                                    }}>
                                        {isOpen ? '✕' : '+'}
                                    </div>
                                </div>
                                {isOpen && (
                                    <div style={{
                                        borderTop: `1px solid ${activeBorderColor}`,
                                        padding: isMobile ? '25px 0 35px' : '30px 10px 40px',
                                        fontSize: isMobile ? 15 : 16,
                                        color: grayText,
                                        lineHeight: 1.6,
                                        whiteSpace: 'pre-line',
                                        backgroundColor: '#FAFAFA',
                                        animation: 'slideDown 0.3s ease-out'
                                    }}>
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}

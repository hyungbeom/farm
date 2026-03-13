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

    const faqData: FaqItem[] = [
        {
            id: 0,
            question: '행사 일정과 장소가 어떻게 되나요?',
            answer: '본 행사는 2026년 3월 31일(화)부터 진행되며, 장소는 제주특별자치도 제주시 새별오름 일원입니다. 대회의 시작을 알리는 공식 개막식(식전 공연, 레이저쇼 등)은 3월 31일 오후 6시부터 8시까지 진행될 예정입니다.'
        },
        {
            id: 1,
            question: '행사장 입장료가 있나요?',
            answer: '제20회 한국후계농업경영인 전국대회는 누구나 무료로 방문하여 관람하실 수 있습니다.'
        },
        {
            id: 2,
            question: '주차장은 마련되어 있나요? 주차 요금은 얼마인가요?',
            answer: '새별오름 일원에 대형 주차장이 마련되어 있으며, 행사 기간 동안 무료로 이용하실 수 있습니다. 다만 전국 단위 행사인 만큼 개막식 당일이나 방문객이 몰리는 시간대에는 혼잡이 예상되오니 안내 요원의 지시에 잘 따라주시길 부탁드립니다.'
        },
        {
            id: 3,
            question: '대중교통을 이용해서 갈 수 있나요?',
            answer: '네, 가능합니다. 대중교통 이용 시 평화로를 경유하여 \'새별오름\' 정류장에 정차하는 버스를 탑승하시면 됩니다. 자세한 노선 및 교통편은 홈페이지의 \'오시는 길\' 메뉴를 참고해 주시기 바랍니다.'
        },
        {
            id: 4,
            question: '체험 프로그램은 사전에 예약해야 하나요? 참가비가 있나요?',
            answer: '아니요, 사전 예약 없이 행사장 내 체험존으로 오시면 방문객 누구나 현장 접수를 통해 선착순으로 참여하실 수 있습니다. 또한 제주 부스 내에서 진행되는 모든 체험(오메기떡 만들기, 방언 배우기) 및 시식·시음 프로그램(제주꽃차, 지름떡)은 전액 무료로 진행됩니다. (단, 원활한 운영을 위해 프로그램별 1일 최대 참여 인원이 정해져 있어 재료 소진 시 조기 마감될 수 있습니다.)'
        },
        {
            id: 5,
            question: '부스 체험 프로그램 운영 시간은 언제인가요?',
            answer: '주요 부스 체험은 행사 기간 중 오전 10시부터 오후 6시까지 운영됩니다.'
        },
        {
            id: 6,
            question: '여러 종류의 체험을 중복해서 이용할 수 있나요?',
            answer: '네, 원하시는 체험 부스를 자유롭게 모두 이용하실 수 있습니다. 다만 현장 상황에 따라 특정 부스에 대기 줄이 길어질 수 있으니, 여유로운 부스부터 순차적으로 즐기시는 것을 추천해 드립니다.'
        },
        {
            id: 7,
            question: '아이들도 함께 참여할 수 있나요?',
            answer: '네, 남녀노소 누구나 즐길 수 있는 프로그램으로 구성되어 있습니다. 다만, \'제주꽃차 시음회(뜨거운 물)\'와 \'제주 지름떡 시식회(기름 조리)\'의 경우 안전을 위해 어린이 동반 시 보호자분의 세심한 주의 및 지도가 필요합니다.'
        }, {
            id: 8,
            question: '시음하는 꽃차나 시식용 떡은 포장이 가능한가요?',
            answer: '방문객 여러분께 가장 맛있고 안전한 상태로 제공하기 위해, 모든 시식 및 시음은 현장 취식을 원칙으로 하고 있습니다. 위생상의 이유로 별도의 포장 용기는 제공되지 않으니 행사장 내에서 제주의 맛을 여유롭게 즐겨주시기 바랍니다.'
        },
        {
            id: 9,
            question: '비가 와도 행사가 정상적으로 진행되나요?',
            answer: '우천 시에도 기본적인 행사와 부스 운영은 정상적으로 진행됩니다. 단, 기상 악화(강풍, 폭우 등) 시에는 방문객의 안전을 위해 야외 퍼포먼스나 일부 일정이 변동될 수 있으며, 변경 사항은 홈페이지 공지사항을 통해 신속히 안내해 드리겠습니다.'
        },  {
            id: 10,
            question: '기타 행사 관련 문의는 어디로 하면 되나요?',
            answer: '행사 일정이나 이용과 관련된 추가적인 문의 사항은 대회 운영사무국(070-4814-0634)으로 연락해 주시면 친절하게 안내해 드리겠습니다.'
        },
    ];

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

'use client';

import React from 'react';

interface ProjectData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    contribution: string;
    techStack: string[];
    features: string[];
    detailUrl: string;
}

const projectData: Record<string, ProjectData> = {
    nextcareer: {
        id: 'nextcareer',
        title: 'Next Career',
        subtitle: 'AI 시니어 구인 플랫폼',
        description: `🏆AI 융합 기획자 양성과정 Hackathon 우수상 수상

        중장년층의 재취업 니즈를 파악하여 음성 인터뷰 기반 AI 채용 플랫폼을 
        기획했습니다. Whisper, KoAlpaca, KoBERT, RAG를 활용한 기술 파이프라인을 
        설계하고, Next.js로 프로토타입을 구현했습니다.`,
        contribution: 'AI Tech Pipeline Design & Prototype Development',
        techStack: ['Next.js 15(Mock-Site)', 'Illustrator', 'Premiere Pro'],
        features: [
            '음성 인터뷰 → 분석 → 추천 AI 파이프라인 설계',
            '사용자-직무 벡터 유사도 매칭 로직 구상',
            'Next.js 기반 프로토타입 개발',
            '로고 디자인 및 브랜드 아이덴티티 구축',
            'Usecase 시연 영상 제작'
        ],
        detailUrl: 'https://www.notion.so/2b561551fdde806b936bea21e4b9d76e?source=copy_link',
    },
    dungji: {
        id: 'dungji',
        title: '둥지동지',
        subtitle: '룸메이트 구인 서비스',
        description: `🏆2025 AI·SW융합 우수성과 발표대회 우수상 수상

        라이프스타일 기반 기숙사 룸메이트 매칭 서비스입니다.
        사용자가 작성한 구인글을 AI가 분석하는 입력 페이지를 구현하고, 
        메인 페이지 UI 개선 및 결과물 다운로드 버그를 해결했습니다.`,
        contribution: 'Frontend Development & Service Stabilization',
        techStack: ['Vue.js', 'Vuetify', 'Gemini API'],
        features: [
            '구인글 입력 페이지 로직 및 UI 구현',
            '메인 페이지 사용성 개선',
            '결과 페이지 다운로드 버그 해결',
            '서비스 안정화 및 고도화'
        ],
        detailUrl: 'https://www.notion.so/2b561551fdde80bdb85ce9c899d59546?source=copy_link',
    },
    doq: {
        id: 'doq',
        title: 'DOQ',
        subtitle: '맞춤 계약서 생성 서비스',
        description: `캡스톤 디자인 I 프로젝트
        
        AI 기반 계약서 자동 생성 및 실시간 협업 서비스입니다.
Vue.js SPA 아키텍처를 설계하고, WebSocket 기반 실시간 분할 뷰를 구현했습니다.`,
        contribution: 'Frontend Development (80%) & UX Design',
        techStack: ['Vue.js', 'Vuetify', 'WebSocket', 'premiere Pro', 'After Effects'],
        features: [
            'Vue.js 기반 SPA 아키텍처 설계',
            'WebSocket 실시간 분할 뷰 구현',
            '애니메이션 스텝퍼 온보딩 프로세스',
            '전시 홍보 영상 기획 및 제작'
        ],
        detailUrl: 'https://www.notion.so/DOQ-2ce61551fdde80679cadf1292810f977?source=copy_link',
    },
    dumandum: {
        id: 'dumandum',
        title: '덤앤덤',
        subtitle: '가성비 지도 서비스',
        description: `🏆9th UMC Hackathon 우수상 수상

        합리적인 소비를 돕는 지도 기반 서비스입니다.
24시간 내 MVP 완성을 위해 기능 범위를 전략적으로 축소하고 
PM으로서 팀을 리드했습니다.`,
        contribution: '24h MVP Strategy & Product Management',
        techStack: ['PM', 'Lean UX', 'UX Strategy', 'figma'],
        features: [
            '프로덕트 정의 및 UX 전략 수립',
            '시장 조사 및 기능 명세 작성',
            'MVP 기능 우선순위 전략 주도',
            '기획-디자인-개발 커뮤니케이션 총괄',
            'BM/그로스 전략 및 AI 활용 구조 기획'
        ],
        detailUrl: 'https://www.notion.so/2e561551fdde80a49922daae6b044d7f?source=copy_link',
    },
    deptwebsite: {
        id: 'deptwebsite',
        title: 'Dept. Website Renewal',
        subtitle: '예술공학대학 웹사이트 리뉴얼',
        description: `중앙대학교 예술공학대학 웹사이트 리뉴얼 프로젝트입니다.

        사용자 경험을 개선하기 위해 메인페이지 UX/UI 전면 개편을 진행하고, 
        학생회 DB 최신화, SW교육원 페이지 연동을 구현했습니다.
        또한 지속적인 사용자 유입을 위한 리텐션 전략을 수립했습니다.`,
        contribution: 'UX/UI Overhaul & Retention Strategy',
        techStack: ['Next.js', 'Figma', 'DB Management'],
        features: [
            '메인페이지 UX/UI 디자인/개발',
            '데이터베이스 최신화',
            '사용자 리텐션 전략 수립',
            'SW교육원 페이지 연동 구현'
        ],
        detailUrl: 'https://www.notion.so/2b561551fdde8047a374cbbba18d310d?source=copy_link',
    },
    monetai: {
        id: 'monetai',
        title: 'Monetai',
        subtitle: 'AI SaaS 마케팅 솔루션 BD',
        description: `AI SaaS 마케팅 툴 'Monetai'의 서포터즈로서 BD(사업 개발) 캠페인을 기획·실행했습니다.

        결제 확률 기반 타겟팅 솔루션의 가치를 게임사에 전달하기 위해 
        타겟 리서치, 콜드메일 카피라이팅, 소개 페이지 제작까지 
        A–Z 풀사이클 캠페인을 수행하여 업계 평균 대비 3.7배 높은 CTR(20%)을 달성했습니다.`,
        contribution: 'BD Campaign Planning & Execution',
        techStack: ['Gen AI', 'Apollo.io', 'Google Antigravity', 'Gmass', 'Excel'],
        features: [
            '글로벌 캐주얼/방치형 게임사 5개사 타겟 발굴',
            'Pain Point 기반 콜드메일 훅 전략 설계',
            'Monetai 소개 페이지 기획 및 제작',
            '오픈율 80%, 클릭률 20% (평균 대비 3.7배) 달성',
            '타겟팅 정교화·하이퍼 퍼스널라이제이션 피봇 전략 수립'
        ],
        detailUrl: 'https://www.notion.so/AI-Monetai-BD-30261551fdde808c8012ee605068cc23?source=copy_link',
    },
    barkit: {
        id: 'barkit',
        title: 'BarKit',
        subtitle: '지도형 통합 멤버십 지갑 서비스',
        description: `Barcode + Kit!\n\n여러 멤버십·포인트 바코드를 한곳에 모아 매장별로 자동 매칭·즉시 제시할 수 있는 지도형 통합 멤버십 지갑 서비스입니다.\n\n BarKit의 서비스 철학은 다음과 같습니다.\n\n🔥 귀찮음을 줄이는 것: 모든 멤버십 바코드를 한 곳에 모아 손쉽게 제시\n🔥 모름을 없애는 것: 지도 기반 매장 탐색으로 주변 멤버십 혜택을 확인`,
        contribution: 'Frontend Lead & Core Feature Development',
        techStack: ['React 19', 'TypeScript', 'Vite', 'Zustand', 'React Query', 'Google Maps API', 'react-barcode', 'zxing-wasm', 'Tailwind CSS v4', 'PWA'],
        features: [
            'Vite + React 19 + TypeScript 초기 세팅 및 아키텍처 설계',
            '로그인/OAuth 인증 파이프라인 전면 구현',
            '바코드/QR 생성 및 카메라 기반 스캐닝 개발',
            'Google Maps API 연동 매장 정보·지도 핀 구현',
            '모바일 최적화 UI/UX 폴리싱 및 마이크로 인터랙션'
        ],
        detailUrl: 'https://www.notion.so/BarKit-31161551fdde80f0be57d3925a5c9502?source=copy_link',
    }
};

interface ProjectModalProps {
    projectId: string | null;
    onClose: () => void;
}

export default function ProjectModal({ projectId, onClose }: ProjectModalProps) {
    if (!projectId || !projectData[projectId]) return null;

    const project = projectData[projectId];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-2xl bg-black border border-white p-8 md:p-12 shadow-2xl mx-4 max-h-[90vh] overflow-y-auto custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-white hover:text-gray-400 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="mb-8 border-b border-white pb-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
                        {project.title}
                    </h2>
                    <p className="text-xl text-gray-400 font-light">{project.subtitle}</p>
                </div>

                {/* Description */}
                <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3 border-l-2 border-white pl-3">Overview</h3>
                    <p className="text-gray-300 whitespace-pre-line leading-relaxed">{project.description}</p>
                </div>

                {/* Key Contribution */}
                <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3 border-l-2 border-white pl-3">Key Contribution</h3>
                    <p className="text-lg font-medium text-white">{project.contribution}</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3 border-l-2 border-white pl-3">Key Features</h3>
                    <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                <span className="text-white mt-1.5 w-1 h-1 bg-white rounded-full"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3 border-l-2 border-white pl-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 border border-white/30 text-xs text-white uppercase tracking-wider"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* More Detail Button */}
                <div className="pt-4 border-t border-white/10">
                    <a
                        href={project.detailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-medium text-xs tracking-widest uppercase border border-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                        More Detail
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
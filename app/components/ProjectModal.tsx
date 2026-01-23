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

    },
    dungji: {
        id: 'dungji',
        title: '둥지동지',
        subtitle: '룸메이트 구인 서비스',
        description: `🏆2025 AI·SW융합 우수성과 발표대회 우수상 수상

        라이프스타일 기반 기숙사 룸메이트 매칭 서비스입니다.
        사용자가 작성한 구인글을 AI가 분석하는 입력 페이지를 구현하고, 
        메인 페이지 UI 개선 및 렌더링 버그를 해결했습니다.`,
        contribution: 'Frontend Development & Service Stabilization',
        techStack: ['Vue.js', 'Vuetify', 'Gemini API'],
        features: [
            '구인글 입력 페이지 로직 및 UI 구현',
            '메인 페이지 사용성 개선',
            '결과 페이지 렌더링 버그 해결',
            '서비스 안정화 및 고도화'
        ],

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
            </div>
        </div>
    );
}
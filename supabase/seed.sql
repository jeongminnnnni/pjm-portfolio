-- Seed data generated from the previously hardcoded project data.
-- Run after schema.sql, in the Supabase SQL Editor.

insert into projects (id, category, title, subtitle, description, contribution, tech_stack, features, detail_url, sort_order)
values
  ('nextcareer', 'business', 'Next Career', 'AI 시니어 구인 플랫폼', '🏆AI 융합 기획자 양성과정 Hackathon 우수상 수상

        중장년층의 재취업 니즈를 파악하여 음성 인터뷰 기반 AI 채용 플랫폼을
        기획했습니다. Whisper, KoAlpaca, KoBERT, RAG를 활용한 기술 파이프라인을
        설계하고, Next.js로 프로토타입을 구현했습니다.', 'AI Tech Pipeline Design & Prototype Development', ARRAY['Next.js 15(Mock-Site)', 'Illustrator', 'Premiere Pro']::text[], ARRAY['음성 인터뷰 → 분석 → 추천 AI 파이프라인 설계', '사용자-직무 벡터 유사도 매칭 로직 구상', 'Next.js 기반 프로토타입 개발', '로고 디자인 및 브랜드 아이덴티티 구축', 'Usecase 시연 영상 제작']::text[], 'https://www.notion.so/2b561551fdde806b936bea21e4b9d76e?source=copy_link', 0),
  ('dumandum', 'business', '덤앤덤', '가성비 지도 서비스', '🏆9th UMC Hackathon 우수상 수상

        합리적인 소비를 돕는 지도 기반 서비스입니다.
24시간 내 MVP 완성을 위해 기능 범위를 전략적으로 축소하고
PM으로서 팀을 리드했습니다.', '24h MVP Strategy & Product Management', ARRAY['PM', 'Lean UX', 'UX Strategy', 'figma']::text[], ARRAY['프로덕트 정의 및 UX 전략 수립', '시장 조사 및 기능 명세 작성', 'MVP 기능 우선순위 전략 주도', '기획-디자인-개발 커뮤니케이션 총괄', 'BM/그로스 전략 및 AI 활용 구조 기획']::text[], 'https://www.notion.so/2e561551fdde80a49922daae6b044d7f?source=copy_link', 1),
  ('monetai', 'business', 'Monetai', 'AI SaaS 마케팅 솔루션 BD', 'AI SaaS 마케팅 툴 ''Monetai''의 서포터즈로서 BD(사업 개발) 캠페인을 기획·실행했습니다.

        결제 확률 기반 타겟팅 솔루션의 가치를 게임사에 전달하기 위해
        타겟 리서치, 콜드메일 카피라이팅, 소개 페이지 제작까지
        A–Z 풀사이클 캠페인을 수행하여 업계 평균 대비 3.7배 높은 CTR(20%)을 달성했습니다.', 'BD Campaign Planning & Execution', ARRAY['Gen AI', 'Apollo.io', 'Google Antigravity', 'Gmass', 'Excel']::text[], ARRAY['글로벌 캐주얼/방치형 게임사 5개사 타겟 발굴', 'Pain Point 기반 콜드메일 훅 전략 설계', 'Monetai 소개 페이지 기획 및 제작', '오픈율 80%, 클릭률 20% (평균 대비 3.7배) 달성', '타겟팅 정교화·하이퍼 퍼스널라이제이션 피봇 전략 수립']::text[], 'https://www.notion.so/AI-Monetai-BD-30261551fdde808c8012ee605068cc23?source=copy_link', 2),
  ('dungji', 'product', '둥지동지', '룸메이트 구인 서비스', '🏆2025 AI·SW융합 우수성과 발표대회 우수상 수상

        라이프스타일 기반 기숙사 룸메이트 매칭 서비스입니다.
        사용자가 작성한 구인글을 AI가 분석하는 입력 페이지를 구현하고,
        메인 페이지 UI 개선 및 결과물 다운로드 버그를 해결했습니다.', 'Frontend Development & Service Stabilization', ARRAY['Vue.js', 'Vuetify', 'Gemini API']::text[], ARRAY['구인글 입력 페이지 로직 및 UI 구현', '메인 페이지 사용성 개선', '결과 페이지 다운로드 버그 해결', '서비스 안정화 및 고도화']::text[], 'https://www.notion.so/2b561551fdde80bdb85ce9c899d59546?source=copy_link', 0),
  ('doq', 'product', 'DOQ', '맞춤 계약서 생성 서비스', '캡스톤 디자인 I 프로젝트

        AI 기반 계약서 자동 생성 및 실시간 협업 서비스입니다.
Vue.js SPA 아키텍처를 설계하고, WebSocket 기반 실시간 분할 뷰를 구현했습니다.', 'Frontend Development (80%) & UX Design', ARRAY['Vue.js', 'Vuetify', 'WebSocket', 'premiere Pro', 'After Effects']::text[], ARRAY['Vue.js 기반 SPA 아키텍처 설계', 'WebSocket 실시간 분할 뷰 구현', '애니메이션 스텝퍼 온보딩 프로세스', '전시 홍보 영상 기획 및 제작']::text[], 'https://www.notion.so/DOQ-2ce61551fdde80679cadf1292810f977?source=copy_link', 1),
  ('deptwebsite', 'product', 'Dept. Website Renewal', '예술공학대학 웹사이트 리뉴얼', '중앙대학교 예술공학대학 웹사이트 리뉴얼 프로젝트입니다.

        사용자 경험을 개선하기 위해 메인페이지 UX/UI 전면 개편을 진행하고,
        학생회 DB 최신화, SW교육원 페이지 연동을 구현했습니다.
        또한 지속적인 사용자 유입을 위한 리텐션 전략을 수립했습니다.', 'UX/UI Overhaul & Retention Strategy', ARRAY['Next.js', 'Figma', 'DB Management']::text[], ARRAY['메인페이지 UX/UI 디자인/개발', '데이터베이스 최신화', '사용자 리텐션 전략 수립', 'SW교육원 페이지 연동 구현']::text[], 'https://www.notion.so/2b561551fdde8047a374cbbba18d310d?source=copy_link', 2),
  ('barkit', 'product', 'BarKit', '지도형 통합 멤버십 지갑 서비스', 'Barcode + Kit!

여러 멤버십·포인트 바코드를 한곳에 모아 매장별로 자동 매칭·즉시 제시할 수 있는 지도형 통합 멤버십 지갑 서비스입니다.

 BarKit의 서비스 철학은 다음과 같습니다.

🔥 귀찮음을 줄이는 것: 모든 멤버십 바코드를 한 곳에 모아 손쉽게 제시
🔥 모름을 없애는 것: 지도 기반 매장 탐색으로 주변 멤버십 혜택을 확인', 'Frontend Lead & Core Feature Development', ARRAY['React 19', 'TypeScript', 'Vite', 'Zustand', 'React Query', 'Google Maps API', 'react-barcode', 'zxing-wasm', 'Tailwind CSS v4', 'PWA']::text[], ARRAY['Vite + React 19 + TypeScript 초기 세팅 및 아키텍처 설계', '로그인/OAuth 인증 파이프라인 전면 구현', '바코드/QR 생성 및 카메라 기반 스캐닝 개발', 'Google Maps API 연동 매장 정보·지도 핀 구현', '모바일 최적화 UI/UX 폴리싱 및 마이크로 인터랙션']::text[], 'https://www.notion.so/BarKit-31161551fdde80f0be57d3925a5c9502?source=copy_link', 3)
on conflict (id) do update set
  category = excluded.category,
  title = excluded.title,
  subtitle = excluded.subtitle,
  description = excluded.description,
  contribution = excluded.contribution,
  tech_stack = excluded.tech_stack,
  features = excluded.features,
  detail_url = excluded.detail_url,
  sort_order = excluded.sort_order;


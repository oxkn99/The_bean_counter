<!--
Sync Impact Report:
- Version change: 0.0.0 → 1.0.0
- List of modified principles: N/A (Initial creation)
- Added sections: Core Principles, Governance
- Removed sections: [SECTION_2_NAME], [SECTION_3_NAME]
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md
  - ✅ .specify/templates/spec-template.md
  - ✅ .specify/templates/tasks-template.md
- Follow-up TODOs: None
-->
# Dutch Pay Calculator Constitution

## Core Principles

### I. 프레임워크 및 빌드 도구 (Framework and Build Tools)
Vue 3와 Vite를 사용하여 프로젝트를 구성합니다. TypeScript를 기본 언어로 사용합니다.

### II. 서버리스 아키텍처 (Serverless Architecture)
GitHub Pages 배포를 목표로 하므로, 별도의 백엔드 서버 없이 모든 로직이 브라우저 내에서 실행되는 순수 클라이언트 사이드 애플리케이션으로만 구축합니다. 데이터는 페이지를 벗어나면 사라지는 것을 기본으로 합니다.

### III. 상태 관리 (State Management)
복잡한 정산 상태를 관리하기 위해 Pinia를 유일한 상태 관리 라이브러리로 사용합니다.

### IV. 스타일링 (Styling)
외부 UI 라이브러리 없이, Tailwind CSS를 사용하여 기본적인 스타일링을 처리합니다.

### V. 의존성 최소화 (Dependency Minimization)
GitHub Pages에 쉽게 배포할 수 있도록 불필요한 외부 라이브러리 사용을 최소화합니다.

## Governance

본 헌법은 프로젝트의 모든 기술적 결정에 대한 최고 규범입니다. 헌법을 개정하려면 팀의 동의를 얻어야 하며, 모든 변경 사항은 이 문서에 기록되어야 합니다. 모든 코드 기여는 본 헌법의 원칙을 준수해야 합니다.

**Version**: 1.0.0 | **Ratified**: 2025-10-30 | **Last Amended**: 2025-10-30
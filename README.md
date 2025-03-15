# 포켓몬 도감 프로젝트 (Pokemon Encyclopedia)

## 📖 소개

이 프로젝트는 PokeAPI를 활용하여 제작된 현대적인 포켓몬 도감 웹 애플리케이션입니다. React와 TypeScript를 기반으로 제작되었으며, 사용자 친화적인 인터페이스와 다양한 기능을 제공합니다.

## ✨ 주요 기능

- **포켓몬 목록 조회**

  - 무한 스크롤을 통한 효율적인 데이터 로딩
  - 가상 스크롤링을 통한 성능 최적화
  - 이미지 지연 로딩 구현

- **포켓몬 상세 정보**

  - 기본 정보 (이름, 타입, 능력치 등)
  - 이미지 갤러리 (기본, shiny, 다양한 세대별 스프라이트)
  - 진화 체인 정보
  - 게임 버전별 정보

- **고급 기능**
  - 포켓몬 타입별 필터링
  - 실시간 검색 기능
  - 다크모드/라이트모드 지원
  - 반응형 디자인 (모바일 대응)

## 🛠 기술 스택

### 프론트엔드

- **핵심**: React 18, TypeScript
- **상태 관리**: Zustand
- **데이터 페칭**: TanStack Query v5 (React Query)
- **스타일링**: Tailwind CSS, Radix UI
- **라우팅**: React Router v6

### 개발 도구

- **빌드**: Vite
- **코드 품질**
  - ESLint
  - Prettier
  - Husky (Git Hooks)
  - Commitlint

### 성능 최적화

- React Query를 통한 서버 상태 관리
- 이미지 최적화 (lazy loading)
- 가상 스크롤링 (@tanstack/react-virtual)
- Code Splitting & Lazy Loading

## 🚀 시작하기

### 필수 조건

- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone [repository-url]

# 프로젝트 디렉토리로 이동
cd pokemon-encyclopedia

# 의존성 설치
npm install

# 개발 서버 실행 (기본 포트: 5173)
npm run dev

# 프로덕션 빌드
npm run build
```

## 📁 프로젝트 구조

```
src/
├── apis/          # API 통신 관련 코드
│   ├── pokemon.ts # 포켓몬 API 요청 함수
│   └── types.ts   # API 관련 타입 정의
├── components/    # 재사용 가능한 컴포넌트
│   ├── ui/       # 기본 UI 컴포넌트
│   ├── pokemon/  # 포켓몬 관련 컴포넌트
│   └── layout/   # 레이아웃 컴포넌트
├── hooks/        # 커스텀 훅
├── pages/        # 페이지 컴포넌트
├── store/        # Zustand 스토어
├── types/        # TypeScript 타입 정의
└── utils/        # 유틸리티 함수
```

## 🎯 주요 구현 사항

### 타입 시스템

- 포켓몬 데이터에 대한 완전한 타입 정의
- API 응답에 대한 정확한 타입 인터페이스
- 컴포넌트 Props에 대한 명확한 타입 지정

### 상태 관리

- Zustand를 통한 전역 상태 관리
  - 테마 모드 (다크/라이트)
  - 필터링 상태
  - 검색 쿼리

### 데이터 페칭

- React Query를 활용한 효율적인 데이터 관리
  - 캐싱 전략
  - 무한 스크롤 구현
  - 에러 핸들링

### 에러 처리

- ErrorBoundary를 통한 전역 에러 처리
- 사용자 친화적인 에러 메시지
- 네트워크 에러 대응

## 🔍 코드 품질 관리

- ESLint 규칙 준수
- Prettier를 통한 일관된 코드 스타일
- Husky를 통한 커밋 전 코드 검사
- TypeScript strict 모드 활성화

## 🤝 기여하기

1. 이 저장소를 Fork 합니다
2. 새로운 Branch를 생성합니다
3. 변경사항을 Commit 합니다
4. Branch에 Push 합니다
5. Pull Request를 생성합니다

## 📝 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

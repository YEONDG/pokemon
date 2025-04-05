# 포켓몬 도감 앱 테스트 가이드

이 문서는 포켓몬 도감 React 앱에 대한 자동화된 테스트를 설명합니다. 테스트는 [Playwright](https://playwright.dev/)를 사용하여 작성되었습니다.

## 테스트 설정

### 요구 사항

- Node.js (18.x 이상 권장)
- npm 또는 yarn

### 설치 방법

Playwright와 필요한 의존성을 설치하려면 다음 명령어를 실행하세요:

```bash
# Playwright 설치
npm install -D @playwright/test

# Playwright 브라우저 설치
npx playwright install
```

## 테스트 실행

### 모든 테스트 실행

모든 테스트를 실행하려면:

```bash
npm test
```

### 개발 중 테스트

개발 중 테스트를 UI 모드로 실행하려면:

```bash
npm run test:ui
```

디버깅 모드로 테스트를 실행하려면:

```bash
npm run test:debug
```

### 테스트 결과 확인

테스트 리포트를 확인하려면:

```bash
npm run test:report
```

## 테스트 구조

프로젝트의 테스트는 다음과 같이 구성되어 있습니다:

- `tests/`: 모든 테스트 파일이 포함된 디렉토리
  - `pokemon.spec.js`: 기본 기능 테스트 (메인 페이지, 필터링, 검색 등)
  - `pokemon-types.spec.js`: 각 포켓몬 타입별 필터링 테스트

## GitHub Actions 통합

이 프로젝트는 GitHub Actions를 사용하여 CI 환경에서 테스트를 자동으로 실행합니다. 메인 브랜치에 푸시하거나 풀 리퀘스트를 생성할 때마다 모든 테스트가 실행됩니다.

GitHub Actions 워크플로우는 `.github/workflows/playwright.yml` 파일에서 확인할 수 있습니다.

## 테스트 확장

### 새로운 테스트 추가

새로운 테스트를 추가하려면 `tests/` 디렉토리에 새 파일을 생성하고 다음 구조를 따르세요:

```javascript
const { test, expect } = require('@playwright/test');

test.describe('테스트 그룹 이름', () => {
  test.beforeEach(async ({ page }) => {
    // 각 테스트 전에 실행되는 코드
    await page.goto('http://localhost:5173/');
  });

  test('테스트 케이스 이름', async ({ page }) => {
    // 테스트 로직
  });
});
```

## 문제 해결

### 일반적인 문제

1. **테스트가 실패하는 경우**: 
   - 로컬 개발 서버가 실행 중인지 확인하세요 (`npm run dev`).
   - 테스트에서 참조하는 선택자가 최신 코드와 일치하는지 확인하세요.

2. **타임아웃 오류**: 
   - 타임아웃 시간을 늘려보세요 (`playwright.config.js`에서 설정 가능).
   - 네트워크나 애플리케이션 성능 문제가 있는지 확인하세요.

3. **선택자 오류**: 
   - UI 변경 시 테스트 코드의 선택자도 업데이트해야 합니다.
   - Playwright Inspector를 사용하여 올바른 선택자를 찾으세요.

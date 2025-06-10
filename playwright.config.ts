import { defineConfig, devices } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  /* 최대 실패 횟수. 이 횟수가 넘으면 테스트가 중단됩니다 */
  maxFailures: 2,
  /* 병렬로 실행할 테스트 작업자 수 */
  workers: process.env.CI ? 1 : undefined,
  /* 각 테스트에 대한 리포터 */
  reporter: [["html", { outputFolder: "playwright-report", open: "never" }]],
  /* 공유 설정 (모든 프로젝트에 적용) */
  use: {
    /* 모든 요청에 대한 기본 URL */
    baseURL: "http://localhost:5173",

    /* 자동으로 스크린샷 수집 */
    screenshot: "only-on-failure",

    /* 모든 테스트에 대한 추적 수집 */
    trace: "on-first-retry",
  },

  /* 브라우저별 설정 */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  /* 로컬 개발 웹서버 설정 (필요한 경우) */
  webServer: {
    command: "npm run dev",
    url: "http://localhost:5173",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000, // 2분
  },
});

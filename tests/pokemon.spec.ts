import { expect, test } from "@playwright/test";

test.describe("포켓몬 도감 웹사이트 테스트", () => {
  // 각 테스트 전에 홈페이지로 이동
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/");
  });

  test("메인 페이지가 올바르게 로드되는지 확인", async ({ page }) => {
    // 페이지 타이틀 확인
    await expect(page).toHaveTitle(/포켓몬 도감/);

    // 헤더가 표시되는지 확인
    await expect(page.locator("a", { hasText: "포켓몬도감" })).toBeVisible();

    // 타입 필터가 표시되는지 확인
    await expect(page.locator('a[href="/pokemon/type/fire"]')).toBeVisible();
    await expect(page.locator('a[href="/pokemon/type/water"]')).toBeVisible();
    await expect(page.locator('a[href="/pokemon/type/grass"]')).toBeVisible();

    // 검색 입력창이 표시되는지 확인
    await expect(page.locator('input[type="text"]')).toBeVisible();

    // 포켓몬 목록이 표시되는지 확인 (첫 번째 포켓몬 카드 확인)
    await expect(page.locator('a[href="/pokemon/1"]')).toBeVisible();
  });

  test("타입 필터링 기능이 올바르게 작동하는지 확인", async ({ page }) => {
    // 불꽃 타입 클릭
    await page.click('a[href="/pokemon/type/fire"]');

    // URL이 변경되었는지 확인
    await expect(page).toHaveURL(/\/pokemon\/type\/fire/);

    // 모든 표시된 포켓몬이 불꽃 타입을 포함하는지 확인 (복합 타입 허용)
    // 몇 개 샘플 포켓몬 확인으로 대체
    await expect(page.getByText("파이리")).toBeVisible();
    await expect(page.getByText("리자드")).toBeVisible();

    // 불꽃 타입이 아닌 포켓몬이 표시되지 않는지 확인 (예: 물 타입)
    await expect(page.getByText("꼬부기")).not.toBeVisible();

    // 파이리(Charmander)가 목록에 있는지 확인
    await expect(page.locator("text=파이리")).toBeVisible();

    // 기본 페이지
    await page.goto("http://localhost:5173/");
    // 다른 타입으로 전환 - 전기 타입 클릭
    await page.click('a[href="/pokemon/type/electric"]');

    // URL이 변경되었는지 확인
    await expect(page).toHaveURL(/\/pokemon\/type\/electric/);

    // 전기 타입 헤딩이 표시되는지 확인
    await expect(page.getByRole("heading", { name: "전기" })).toBeVisible();

    // 전기 타입 포켓몬들이 표시되는지 확인
    await expect(page.getByText("피카츄").first()).toBeVisible();
    await expect(page.getByText("라이츄").first()).toBeVisible();
  });

  test("검색 기능이 올바르게 작동하는지 확인", async ({ page }) => {
    // 검색창에 "피카츄" 입력
    await page.fill('input[type="text"]', "피카츄");

    // 검색 버튼 클릭
    await page.click('button:has-text("검색")');

    // 검색 결과가 표시되는지 확인
    await expect(page.locator("text=피카츄")).toBeVisible();

    // 다른 포켓몬으로 검색 - "이상해씨"
    await page.fill('input[type="text"]', "이상해씨");
    await page.click('button:has-text("검색")');

    // 검색 결과가 표시되는지 확인
    await expect(page.locator("text=이상해씨")).toBeVisible();
  });

  test("포켓몬 상세 정보 페이지가 올바르게 표시되는지 확인", async ({
    page,
  }) => {
    await page.goto("http://localhost:5173/");
    await page.fill('input[type="text"]', "피카츄");
    await page.click('button:has-text("검색")');

    // 검색 결과 로드 대기
    await page.waitForSelector('a[href="/pokemon/25"]');
    await page.click('a[href="/pokemon/25"]');

    // 피카츄 상세 정보가 표시되는지 확인
    await expect(page.locator("text=피카츄")).toBeVisible();
    await expect(page.locator("text=전기").first()).toBeVisible();

    // 기본 정보 섹션이 표시되는지 확인
    await expect(page.locator("text=기본 정보")).toBeVisible();

    // 스탯 정보가 표시되는지 확인
    await expect(page.locator("text=기본 스탯")).toBeVisible();
  });

  test("테마 토글 기능이 올바르게 작동하는지 확인", async ({ page }) => {
    // 현재 테마 상태 확인
    const initialTheme =
      (await page.locator("html").getAttribute("class")) || "";

    // 테마 토글 버튼 클릭하여 메뉴 열기
    await page.click('button[aria-haspopup="menu"]');

    // 메뉴가 열렸는지 확인
    await expect(
      page.locator('div[role="menu"][data-state="open"]'),
    ).toBeVisible();

    // initialTheme이 "dark"인 경우 "Light" 메뉴 항목 선택, 아니면 "Dark" 선택
    if (initialTheme === "dark") {
      await page.click('div[role="menuitem"]:has-text("Light")');
    } else {
      await page.click('div[role="menuitem"]:has-text("Dark")');
    }

    // 테마 변경 확인
    const newTheme = await page.locator("html").getAttribute("class");

    // 다크 모드와 라이트 모드 전환 확인
    expect(initialTheme).not.toEqual(newTheme);

    await page.waitForTimeout(500); // 테마 변경 후 페이지 로드 대기

    // 다시 원래 테마로 변경
    // 테마 토글 버튼 클릭하여 메뉴 열기
    await page.click('button[aria-haspopup="menu"]');

    // 메뉴가 열렸는지 확인
    await expect(
      page.locator('div[role="menu"][data-state="open"]'),
    ).toBeVisible();

    if (newTheme === "dark") {
      await page.click('div[role="menuitem"]:has-text("Light")');
    } else {
      await page.click('div[role="menuitem"]:has-text("Dark")');
    }

    // 원래 상태로 돌아갔는지 확인
    const finalTheme = (await page.locator("html").getAttribute("class")) || "";

    const initialHasDark = initialTheme.includes("dark");
    const finalHasDark = finalTheme.includes("dark");
    expect(initialHasDark).toEqual(finalHasDark);
  });

  test("반응형 디자인이 올바르게 작동하는지 확인", async ({ page }) => {
    // 모바일 화면 크기로 설정
    await page.setViewportSize({ width: 375, height: 667 });

    // 모바일 화면에서 요소들이 올바르게 표시되는지 확인
    await expect(page.locator("a", { hasText: "포켓몬도감" })).toBeVisible();

    // 태블릿 화면 크기로 설정
    await page.setViewportSize({ width: 768, height: 1024 });

    // 태블릿 화면에서 요소들이 올바르게 표시되는지 확인
    await expect(page.locator("a", { hasText: "포켓몬도감" })).toBeVisible();

    // 데스크톱 화면 크기로 설정
    await page.setViewportSize({ width: 1280, height: 800 });

    // 데스크톱 화면에서 요소들이 올바르게 표시되는지 확인
    await expect(page.locator("a", { hasText: "포켓몬도감" })).toBeVisible();
  });
});

import { Link, useRouteError } from "react-router-dom";

import { NavBar } from "./components/nav";
import { ThemeProvider } from "./components/theme-provider";

export default function ErrorPage() {
  // useRouteError 훅을 통해 발생한 에러 객체를 가져옵니다.
  const error = useRouteError();

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="fixed-scrollbar h-full bg-gray-100 dark:bg-gray-900">
          <NavBar />
          <main className="mx-auto h-full max-w-7xl px-4 pt-20">
            <div
              id="error-page"
              className="flex min-h-screen flex-col items-center justify-center p-6 text-center font-sans"
            >
              <div className="max-w-3xl rounded-lg bg-gray-50 p-8 shadow-xl dark:bg-gray-700">
                <h1 className="mb-4 text-2xl font-extrabold text-red-500">
                  에러가 발생했습니다!
                </h1>
                <p className="mb-4 text-xl dark:text-white">
                  죄송합니다. 예상치 못한 에러가 발생했습니다.
                </p>

                {/* --- 에러 상세 정보 표시 --- */}
                <div className="my-6 rounded-md bg-gray-100 p-4 text-left text-sm text-gray-800">
                  <p className="font-semibold">에러 상세 정보</p>
                  <pre className="mt-2 whitespace-pre-wrap break-words">
                    {/* HTTP 상태 텍스트나 에러 메시지를 보여줍니다. */}
                    {error.statusText || error.message}
                  </pre>
                </div>

                {/* --- 홈으로 가기 버튼 --- */}
                <Link
                  to="/"
                  className="mt-4 inline-block rounded bg-blue-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  홈으로 돌아가기
                </Link>
              </div>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

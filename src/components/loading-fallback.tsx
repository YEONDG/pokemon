export const LoadingFallback = () => (
  <div className="h-screen p-4 text-center text-gray-500 dark:text-gray-400">
    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em]"></div>
    <p className="mt-2">로딩 중...</p>
  </div>
);

import { Button } from "@/components/ui/button";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

interface ErrorFallbackProps extends FallbackProps {}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => (
  <div className="flex h-screen flex-col items-center justify-center gap-10 dark:text-white">
    <p className="text-xl">네트워크 에러가 발생했습니다.</p>
    <pre className="text-sm text-red-500">{error.message}</pre>
    <Button onClick={resetErrorBoundary} size={"lg"}>
      재시도
    </Button>
  </div>
);

interface ErrorBoundaryWrapperProps {
  children: React.ReactNode;
  onReset: () => void;
}

const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({
  children,
  onReset,
}) => (
  <ErrorBoundary
    onReset={onReset}
    fallbackRender={({ error, resetErrorBoundary }) => (
      <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
    )}
  >
    {children}
  </ErrorBoundary>
);

export default ErrorBoundaryWrapper;

interface SkeletonLoaderProps {
  className?: string;
}

export const SkeletonLoader = ({ className }: SkeletonLoaderProps) => (
  <div className={`animate-pulse rounded bg-slate-300 ${className}`} />
);

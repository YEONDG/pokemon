interface SkeletonLoaderProps {
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  className,
}) => <div className={`animate-pulse rounded bg-slate-300 ${className}`} />;

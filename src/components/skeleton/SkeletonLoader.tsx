interface SkeletonLoaderProps {
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  className,
}) => <div className={`bg-slate-300 animate-pulse rounded ${className}`} />;

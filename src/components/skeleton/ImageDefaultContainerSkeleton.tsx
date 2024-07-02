import { SkeletonLoader } from "./SkeletonLoader";

export const ImageDefaultContainerSkeleton = () => {
  return (
    <div className="my-5 flex flex-col items-center justify-center">
      <SkeletonLoader className="my-5 h-10 w-full text-3xl" />
      <div className="flex flex-wrap justify-center gap-4">
        <SkeletonLoader className="h-24 w-24" />
        <SkeletonLoader className="h-24 w-24" />
        <SkeletonLoader className="h-24 w-24" />
        <SkeletonLoader className="h-24 w-24" />
        <SkeletonLoader className="h-24 w-24" />
        <SkeletonLoader className="h-24 w-24" />
        <SkeletonLoader className="h-24 w-24" />
        <SkeletonLoader className="h-24 w-24" />
      </div>
    </div>
  );
};

import { SkeletonLoader } from "@/components/skeleton/SkeletonLoader";

export const ImageVersionsContainerSkeleton = () => {
  return (
    <div className="my-5 flex flex-col items-center justify-center">
      <SkeletonLoader className="my-5 h-10 w-full text-3xl" />

      <div className="flex flex-col items-center justify-center gap-7">
        <div className="flex gap-4">
          <SkeletonLoader className="h-32 w-40" />
          <SkeletonLoader className="h-32 w-40" />
        </div>
        <div className="flex gap-4">
          <SkeletonLoader className="h-32 w-40" />
          <SkeletonLoader className="h-32 w-40" />
          <SkeletonLoader className="h-32 w-40" />
        </div>
        <div className="flex gap-4">
          <SkeletonLoader className="h-32 w-40" />
          <SkeletonLoader className="h-32 w-40" />
          <SkeletonLoader className="h-32 w-40" />
        </div>
        <div className="flex gap-4">
          <SkeletonLoader className="h-32 w-40" />
          <SkeletonLoader className="h-32 w-40" />
          <SkeletonLoader className="h-32 w-40" />
        </div>
        <div className="flex gap-4">
          <SkeletonLoader className="h-32 w-40" />
        </div>
        <div className="flex gap-4">
          <SkeletonLoader className="h-32 w-40" />
          <SkeletonLoader className="h-32 w-40" />
        </div>
        <div className="flex">
          <SkeletonLoader className="h-32 w-40" />
        </div>
      </div>
    </div>
  );
};

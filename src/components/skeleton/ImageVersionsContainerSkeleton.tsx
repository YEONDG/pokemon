import { SkeletonLoader } from '@/components/skeleton/SkeletonLoader';

export const ImageVersionsContainerSkeleton = () => {
  return (
    <div className='flex flex-col justify-center items-center my-5'>
      <SkeletonLoader className='text-3xl h-10 w-full my-5' />

      <div className='flex flex-col justify-center items-center gap-7'>
        <div className='flex gap-4'>
          <SkeletonLoader className='w-40 h-32' />
          <SkeletonLoader className='w-40 h-32' />
        </div>
        <div className='flex gap-4'>
          <SkeletonLoader className='w-40 h-32' />
          <SkeletonLoader className='w-40 h-32' />
          <SkeletonLoader className='w-40 h-32' />
        </div>
        <div className='flex gap-4'>
          <SkeletonLoader className='w-40 h-32' />
          <SkeletonLoader className='w-40 h-32' />
          <SkeletonLoader className='w-40 h-32' />
        </div>
        <div className='flex gap-4'>
          <SkeletonLoader className='w-40 h-32' />
          <SkeletonLoader className='w-40 h-32' />
          <SkeletonLoader className='w-40 h-32' />
        </div>
        <div className='flex gap-4'>
          <SkeletonLoader className='w-40 h-32' />
        </div>
        <div className='flex gap-4'>
          <SkeletonLoader className='w-40 h-32' />
          <SkeletonLoader className='w-40 h-32' />
        </div>
        <div className='flex'>
          <SkeletonLoader className='w-40 h-32' />
        </div>
      </div>
    </div>
  );
};

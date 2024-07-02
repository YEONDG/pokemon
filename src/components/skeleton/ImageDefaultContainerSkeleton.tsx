import { SkeletonLoader } from './SkeletonLoader';

export const ImageDefaultContainerSkeleton = () => {
  return (
    <div className='flex flex-col justify-center items-center my-5 '>
      <SkeletonLoader className='text-3xl h-10 w-full my-5' />
      <div className='flex flex-wrap justify-center gap-4'>
        <SkeletonLoader className='w-24 h-24' />
        <SkeletonLoader className='w-24 h-24' />
        <SkeletonLoader className='w-24 h-24' />
        <SkeletonLoader className='w-24 h-24' />
        <SkeletonLoader className='w-24 h-24' />
        <SkeletonLoader className='w-24 h-24' />
        <SkeletonLoader className='w-24 h-24' />
        <SkeletonLoader className='w-24 h-24' />
      </div>
    </div>
  );
};

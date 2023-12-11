import { FC } from 'react';

interface ProgressBarProps {
  value?: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ value = 0 }) => {
  const width = (value / 300) * 100;
  return (
    <div className='w-full h-4 bg-slate-200 rounded-full'>
      <div
        className='h-full bg-red-200 rounded-full'
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;

interface ProgressBarProps {
  value?: number;
}

export const ProgressBar = ({ value = 0 }: ProgressBarProps) => {
  const width = (value / 300) * 100;
  return (
    <div className="h-4 w-full rounded-full bg-slate-200">
      <div
        className="h-full rounded-full bg-red-200"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

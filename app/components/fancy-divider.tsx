import classNames from 'classnames';

interface FancyDividerProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export default function FancyDivider({ children, className }: FancyDividerProps) {
  return (
    <div className={classNames('flex flex-row items-center justify-center w-full', className)}>
      <hr className="w-full" />
      {children}
      <hr className="w-full" />
    </div>
  );
}

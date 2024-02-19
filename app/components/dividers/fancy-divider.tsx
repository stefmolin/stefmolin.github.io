import classNames from 'classnames';

interface FancyDividerProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  hrClassName?: string;
}

export default function FancyDivider({ children, className, hrClassName }: FancyDividerProps) {
  const rule = <hr className={classNames('w-full', hrClassName)} />;
  return (
    <div className={classNames('flex flex-row items-center justify-center w-full', className)}>
      {rule}
      {children}
      {rule}
    </div>
  );
}

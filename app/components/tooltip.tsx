import classNames from 'classnames';
import tooltipStyles from '../styles/tooltip-styles.module.css';

interface TooltipProps {
  children: React.ReactNode | React.ReactNode[];
  message: string | React.ReactNode;
  backgroundClassName: string;
  borderClassName: string;
  tooltipArrowClassName: string;
}

export default function Tooltip({
  message,
  children,
  backgroundClassName,
  borderClassName,
  tooltipArrowClassName,
}: TooltipProps) {
  // based on https://codesandbox.io/p/devbox/tailwind-react-tooltip-with-arrow-dfr22j?file=%2Fsrc%2FTooltip.js%3A10%2C17
  // dark theme: dark:bg-gray-800 dark:text-white
  return (
    <div className="group relative flex max-w-max flex-col items-center justify-center">
      {children}
      <div
        className={classNames(
          'z-50 absolute left-1/2 top-4 mx-auto min-w-max -translate-x-1/2 scale-0 transform',
          'rounded-lg px-3 py-2 text-xs font-medium transition-all duration-500 group-hover:scale-100',
        )}
      >
        <div
          className={classNames(
            'flex max-w-xs flex-col items-center shadow-lg',
            tooltipStyles['tooltip-message'],
          )}
        >
          <div
            className={classNames('z-50 h-2 w-4', tooltipArrowClassName)}
            style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }}
          ></div>
          <div className={classNames('rounded p-2 border-2', backgroundClassName, borderClassName)}>
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}

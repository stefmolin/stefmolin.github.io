import classNames from 'classnames';

export interface PreviewCardProps {
  body: React.ReactNode;
  footer: React.ReactNode;
  footerClassName?: string;
  header: React.ReactNode;
  id: string;
}

export default function PreviewCard({
  body,
  footer,
  footerClassName,
  header,
  id,
}: PreviewCardProps) {
  return (
    <div
      id={id.replaceAll(':', '').replaceAll(' ', '-').toLowerCase()}
      className="shadow-sm hover:shadow-lg transition-shadow duration-200 p-6 flex flex-col m-5"
    >
      <div className="flex flex-col justify-evenly space-y-5">
        <div className="flex flex-col items-start">{header}</div>
        <div className="lg:pr-5">{body}</div>
        <div
          className={classNames(
            'flex flex-col-reverse items-center justify-between w-full',
            footerClassName,
          )}
        >
          {footer}
        </div>
      </div>
    </div>
  );
}

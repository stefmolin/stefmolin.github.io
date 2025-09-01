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
      className="shadow-xs hover:shadow-lg transition-shadow duration-200 p-6 lg:p-8 flex flex-col m-5"
    >
      <div className="flex flex-col justify-evenly gap-y-5">
        <div className="flex flex-col items-start">{header}</div>
        <div>{body}</div>
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

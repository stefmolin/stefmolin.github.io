import classNames from 'classnames';

const SectionSeparator = ({ className = '' }: { className?: string }) => {
  return <hr className={classNames('border-neutral-200', className)} />;
};

export default SectionSeparator;

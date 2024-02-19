import classNames from 'classnames';

const SectionSeparator = ({ className = 'mt-28 mb-24' }: { className?: string }) => {
  return <hr className={classNames('border-neutral-200', className)} />;
};

export default SectionSeparator;

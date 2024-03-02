import classNames from 'classnames';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Container = ({ children, className = 'px-10' }: Props) => {
  return <div className={classNames('container mx-auto', className)}>{children}</div>;
};

export default Container;

type Props = {
  title: string;
  subtitle?: string;
};

const PostTitle = ({ title, subtitle }: Props) => {
  return (
    <>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none">
        {title}
      </h1>
      {subtitle ? (
        <h4 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter leading-tight md:leading-none">
          {subtitle}
        </h4>
      ) : null}
    </>
  );
};

export default PostTitle;

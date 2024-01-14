import markdownStyles from "../markdown-styles.module.css";
import { ReactElement } from "react";

type Props = {
  content: string;
  children?: ReactElement[];
};

const PostBody = ({ content, children }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }} // TODO: can this be done differently?
        suppressHydrationWarning
      />
      {...children}
    </div>
  );
};

export default PostBody;

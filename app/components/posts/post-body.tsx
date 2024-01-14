import Giscus from "@giscus/react";
import markdownStyles from "../markdown-styles.module.css";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }} // TODO: can this be done differently?
        suppressHydrationWarning
      />
      <hr className="mb-10" />
      <Giscus
        id="comments"
        repo="stefmolin/comments"
        repoId="R_kgDOLEl3Hw"
        category="Announcements"
        categoryId="DIC_kwDOLEl3H84CcaE4"
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </div>
  );
};

export default PostBody;

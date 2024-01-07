import { remark } from "remark";
import { labelCodeBlock } from "./remarkPlugin";
import html from "remark-html";
import prism from "remark-prism";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(prism, {
      plugins: [
        "autolinker",
        "line-numbers",
        "command-line",
        "treeview",
        "keep-markup",
      ],
    })
    .use(labelCodeBlock)
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}

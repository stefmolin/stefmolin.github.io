import { remark } from "remark";
import { labelCodeBlock } from "./remarkPlugin";
import html from "remark-html";
import prism from "remark-prism";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(prism, {
      plugins: [
        "autolinker",
        "command-line",
        "diff-highlight",
        "line-numbers",
        "keep-markup",
        "treeview",
      ],
      // transformInlineCode: true, // TODO: this is too dark for inline unless it is possible to change the theme for inline (then I can remove the custom formatting in the CSS file)
    })
    .use(labelCodeBlock)
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}

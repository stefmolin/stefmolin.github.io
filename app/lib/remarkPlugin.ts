/* Based on https://github.com/kevinzunigacuellar/remark-code-title */

import { visit } from 'unist-util-visit';
import type * as hast from 'hast';
import type * as unified from 'unified';

const LANGUAGE_EXCLUSIONS: string[] = ['diff', 'treeview'];

export const labelCodeBlock: unified.Plugin<[], hast.Root> = () => {
  return (tree, file) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'pre') return;
      if (parent == null) return;

      let offset: number = 1;
      index = index ?? 0;

      // process the code language
      const className = node.properties?.className ?? [];

      if (className != null && Array.isArray(className)) {
        const language: string =
          className
            .map((x) => x.toString())
            .find((x) => x.match(/language-/))
            ?.replace('language-', '') ?? '';
        if (!LANGUAGE_EXCLUSIONS.some((x) => language.includes(x))) {
          const languageNode: hast.Element = {
            type: 'element',
            tagName: 'header',
            children: [
              {
                type: 'element',
                tagName: 'button',
                properties: {
                  className: 'copy-code-button',
                  onclick: 'copyCodeBlock(this)',
                },
                children: [
                  {
                    type: 'element',
                    tagName: 'i',
                    properties: {
                      className: 'fa fa-copy',
                    },
                    children: [],
                  },
                ],
              },
            ],
          };
          parent.children.splice(index, 0, languageNode);
          offset++;
        }
      }

      // const title = `${node.properties["data-title"] ?? ""}`.trim();
      // if (title) {
      //   const titleNode: hast.Element = {
      //     type: "element",
      //     tagName: "h4",
      //     children: [{ type: "text", value: title }],
      //   };

      //   node.children.splice(index + 1, 0, titleNode);
      //   offset++;
      // }

      /* Skips this node (title) and the next node (code) */
      return index + offset;
    });
  };
};

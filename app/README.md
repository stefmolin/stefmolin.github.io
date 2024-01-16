# About the Code behind My Website

This is the code that generates [my website](https://stefaniemolin.com). It is based on the TypeScript [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) provided by [Next.js](https://nextjs.org/), which uses the [static generation](https://nextjs.org/docs/basic-features/pages) feature.

Markdown files are turned into new blog posts or articles on the website. This is done with [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and [`remark-prism`](https://github.com/sergioramos/remark-prism) along with a [custom plugin](./lib/remarkPlugin.ts) to handle code blocks. The metadata from the Markdown files is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter). All of this gets passed down as props to the React components.

## Comments
Comments are powered by [giscus](https://giscus.app/) via the [provided React component](https://github.com/giscus/giscus-component).

## Styles
Styling and responsiveness is handled by [Tailwind CSS](https://tailwindcss.com).

## Icons and Buttons
Icons are from [Font Awesome](https://fontawesome.com/v6/docs/web/use-with/react/add-icons), except the social share buttons, which come from [`react-share`](https://www.npmjs.com/package/react-share).

## Tweet Embeds
Tweet embeds are done with [`react-tweet`](https://vercel.com/blog/introducing-react-tweet).

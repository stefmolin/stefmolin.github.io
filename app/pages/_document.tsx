import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* className="dark:bg-dark-body"*/}
        <script src="https://kit.fontawesome.com/0dd30c21ea.js" crossOrigin="anonymous"></script>
        <Main />
        <NextScript />
        <script src="/copy-code.js"></script>
      </body>
    </Html>
  );
}

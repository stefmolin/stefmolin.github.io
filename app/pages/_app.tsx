import '../styles/global.css';
import '../styles/prism-vsc-dark-plus.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'prismjs/plugins/command-line/prism-command-line.min.css';
import 'prismjs/plugins/diff-highlight/prism-diff-highlight.min.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css';
import 'prismjs/plugins/treeview/prism-treeview.min.css';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

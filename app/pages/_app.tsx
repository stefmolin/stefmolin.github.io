import "../styles/global.css";
import "../styles/prism-vsc-dark-plus.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/treeview/prism-treeview.css";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

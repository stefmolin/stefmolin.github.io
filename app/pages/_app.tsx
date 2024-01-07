import "../styles/global.css";
import "../styles/prism-vsc-dark-plus.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

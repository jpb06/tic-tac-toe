import type { AppProps } from 'next/app';
import './../../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// biome-ignore lint/style/noDefaultExport: next
export default MyApp;

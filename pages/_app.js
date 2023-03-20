import '../styles/MainChat.css'
import '../styles/Responsive.css'
import { GoogleAnalytics } from "nextjs-google-analytics";
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="neyWEpVm2rcA_kL8WjNVIGHBHiRe9aaJwESMLUoJ850" />

      </Head>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-SDQCQHKGB6" />
      <Component {...pageProps} />
    </>
  );
}

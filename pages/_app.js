import '../styles/MainChat.css'
import '../styles/Responsive.css'
import { GoogleAnalytics } from "nextjs-google-analytics";


export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-SDQCQHKGB6" />
      <Component {...pageProps} />
    </>
  );
}

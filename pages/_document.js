import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/aceva.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/aceva.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/aceva.png" />

        <title>ACEVA - AI Virtual Assistant for your Business.</title>
        <meta charSet="utf-8" />
        <meta property="og:title" content="ACEVA" key="title" />
        <meta property="og:keywords" content="Chatbot, Automation, AI"></meta>
        <meta property="og:viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:description" content="ACEVA is a smart bot that handles your communications, automate you business processes while notify you real-time."></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

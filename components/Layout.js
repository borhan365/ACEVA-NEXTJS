import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Chatbot from './chatbot/Chatbot'


function Layout({headers, footers, children, title}) {
  return (
    <>
      <Head>
        <title>{title ? title : "ACEVA - AI Virtual Assistant for your business"}</title>
      </Head>
      <Chatbot />
      <Header headers={headers} />
      {children}
      <Footer footers={footers} />
    </>
  )
}

export default Layout

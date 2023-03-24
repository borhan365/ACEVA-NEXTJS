import React from 'react'
import Chatbot from './chatbot/Chatbot'
import Footer from './Footer'
import Header from './Header'
import Head from 'next/head'


function Layout({headers, footers, children, title}) {
  return (
    <>
      <Head>
        <title>{title ? title : "ACEVA - AI Virtual Assistant for your business"}</title>
      </Head>
      <Header headers={headers} />
      {children}
      <Chatbot />
      <Footer footers={footers} />
    </>
  )
}

export default Layout

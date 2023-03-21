import React from 'react'
import Chatbot from './chatbot/Chatbot'
import Footer from './Footer'
import Header from './Header'


function Layout({headers, footers, children}) {
  return (
    <>
      <Header headers={headers} />
      {children}
      <Chatbot />
      <Footer footers={footers} />
    </>
  )
}

export default Layout

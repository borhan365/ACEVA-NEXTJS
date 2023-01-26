import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { client } from '../lib/client'
import {groq} from 'next-sanity'
import { loadData } from '../pages/api/post'

function Layout({headers, footers, children}) {
  return (
    <>
      <Header headers={headers} />
      {children}
      <Footer footers={footers} />
    </>
  )
}

export default Layout

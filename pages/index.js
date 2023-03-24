import React from 'react'
import Column_Section from '../components/aceva-landing-page/Column_Section'
import Column_Section2 from '../components/aceva-landing-page/Column_Section2'
import Column_Section3 from '../components/aceva-landing-page/Column_Section3'
import Hero_Section from '../components/aceva-landing-page/Hero_Section'
import Integrate_Brand_Section from '../components/aceva-landing-page/Integrate_Brand_Section'
import Multi_Channel_Integration_Section from '../components/aceva-landing-page/Multi_Channel_Integrate_Section'
import Why_Choose_Section from '../components/aceva-landing-page/Why_Choose_Section'
import Chatbot from '../components/chatbot/Chatbot'
import Footer from '../components/footer'
import Header from '../components/Header'
import FaqSection from '../components/home-page/FaqSection'
import NewsLetterSection from '../components/home-page/NewsLetterSection'
import TestimonialSection from '../components/home-page/TestimonialSection'
import { client } from '../lib/client'
import { loadData } from './api/post'
import Layout from '../components/Layout'
// import Layout from './Layout'

function AcevaScreen({headers, footers}) {

  return (
    <>
      {/* <Header /> */}
        <Layout title="ACEVA - AI Virtual Assistant for your business" headers={headers} footers={footers}>
          <Hero_Section />
          {/* <Brand_Section /> */}
          <Multi_Channel_Integration_Section />
          <Column_Section />
          <Column_Section2 />
          <Column_Section3 />
          {/* <Integrate_Section /> */}
          <Integrate_Brand_Section />
          <Why_Choose_Section />
          {/* <TestimonialSection /> */}
          {/* <FeaturedAreaSection /> */}
          {/* <WhatWeDoSection /> */}
          <FaqSection />
          <NewsLetterSection />
        
        </Layout>
      {/* <Footer /> */}
    </>
  )
}

export default AcevaScreen

export async function getServerSideProps() {

  const headerQuery = '*[_type == "header"]'
  const footerQuery = '*[_type == "footer"]'

  const headers = await client.fetch(headerQuery)
  const footers = await client.fetch(footerQuery)

  return {
    props: {
      headers,
      footers
    }
  }
}


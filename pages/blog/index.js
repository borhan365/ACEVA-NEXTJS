import React from 'react'
import BodyFeaturedSection from '../../components/blog/BodyFeaturedSection'
import FeaturedSection from '../../components/blog/FeaturedSection'
import LatestArticleSection from '../../components/blog/LatestArticleSection'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {loadData} from '../api/post'
import { client } from '../../lib/client'
import Layout from '../../components/Layout'

const LOAD_MORE_STEP = 4

function BlogScreen({initialPosts, footers, headers}) {
   
  return (
    <>
    {/* <Header headers={headers} /> */}
      <Layout headers={headers} footers={footers} >
        <FeaturedSection article={initialPosts} />
        {/* <LatestArticleSection article={initialPosts} /> */}
      </Layout>
      {/* <BodyFeaturedSection /> */}
      {/* <LatestArticleSection /> */}
    {/* <Footer footers={footers} /> */}
    </>
  )
}

export default BlogScreen

export async function getServerSideProps(context) {
  const {posts, total } = await loadData(0, LOAD_MORE_STEP)

  const headerQuery = '*[_type == "header"]'
  const footerQuery = '*[_type == "footer"]'


  const headers = await client.fetch(headerQuery)
  const footers = await client.fetch(footerQuery)

  return {
    props: {
      initialPosts: posts,
      footers,
      headers
    },
  }
}

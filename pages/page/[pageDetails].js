import SanityBlockContent from '@sanity/block-content-to-react'
import moment from 'moment'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { IoTimeOutline } from 'react-icons/io5'
import Layout from '../../components/Layout'
import { client, urlFor } from '../../lib/client'

const pageCover = 'https://www.kemarautomation.in/wp-content/uploads/2015/12/contact-us-banner.jpg'

function PageDetailsScreen({page, footers, headers}) {

  console.log("page details", page)

  const router = useRouter()
  const {pageDetails} = router.query

  // useEffect(() => {

  // },[pageDetails])
  
  console.log("pageDetails", pageDetails)

  return (
    <>
      <Layout title={page?.title} headers={headers} footers={footers} >
        <section className="blog-details-section">
          <div className="container">
            <div className="blog-details-wrapper page-details-wrapper">

              {/* category */}
              {/* <div className="blog-details-category-wrap">
                <li className='category-badge'><Link to="/category/423434">AI</Link></li>
                <li className='category-badge'><Link to="/category/423434">Machine Learning</Link></li>
              </div> */}

              {/* title */}
              <div className="blog-details-title page-details-title">
                <h1>{page?.title}</h1>
                <div className="dot"></div>
              </div>
              
              {/* thumb */}
              <div className="blog-details-thumb single-details-thumb">
              {/* <Image
                  alt="The guitarist in the concert."
                  src={urlFor(page?.image)}
                  width={100}
                  height={200}
                  layout="responsive"
              /> */}
               { page?.image && <img src={urlFor(page?.image).url()} alt="page title" /> }
              </div>

              {/* excerpt */}
              <div className="featured-blog-left-excerpt">

                {/* author */}
                {/* <div className="featured-blog-left-excerpt-author">
                    <div className="fetured-blog-left-author-thumb blog-details-author">
                      <Link to="/author/84973">
                        <img src="https://res.cloudinary.com/dn1j6dpd7/image/fetch/c_fill,f_auto,h_832,q_auto,w_1856/https://chatbot-blog.labs.livechat.com/app/uploads/2022/11/Frame-3510-1.png" alt="" />
                        <span>Suja Krishnan</span>
                      </Link>
                    </div>
                </div> */}

                {/* data */}
                <div className="featured-blog-left-excerpt-date">
                  <p> <IoTimeOutline /> {moment(page?._createAt).format('LL')} </p>
                </div>
              </div>


              {/* blog content */}
              <div className="blog-content-wrapper">
                <SanityBlockContent blocks={page?.description} />
              </div>

              {/* related articles */}
              {/* <RelatedArticleSection /> */}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default PageDetailsScreen

export async function getStaticPaths() {
  // const query = `*[_type == "post"] {
  //     slug {
  //         current
  //     }fallback: 'blocking'
  // }`;

  // const posts = await client.fetch(query);
  // const paths = posts.map((post) => ({
  //     params: {
  //       pageDetails: post.slug.current
  //     }
  // }));

  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params: { pageDetails }}) {
  const query = `*[_type == "page" && slug.current == '${pageDetails}'][0]`;

  const page = await client.fetch(query);

  const headerQuery = '*[_type == "header"]'
  const footerQuery = '*[_type == "footer"]'

  const headers  = await client.fetch(headerQuery)
  const footers = await client.fetch(footerQuery)

  return {
      props: {
          page,
          headers,
          footers
      }
  }
}
import BlockContent from '@sanity/block-content-to-react'
import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { IoTimeOutline } from 'react-icons/io5'
import Layout from '../../components/Layout'
import { client, urlFor } from '../../lib/client'

function BlogDetails({post, headers, footers}) {
  const router = useRouter()
  const {blogDetails} = router.query

  useEffect(() => {

  },[blogDetails])
  
  console.log(blogDetails)

  console.log(post)
  return (
    <>
      <Layout title={post?.title} headers={headers} footers={footers}>
        <section className="blog-details-section">
          <div className="container">
            <div className="blog-details-wrapper">

              {/* category */}
              {/* <div className="blog-details-category-wrap">
                <li className='category-badge'><Link href="/category/423434">AI</Link></li>
                <li className='category-badge'><Link href="/category/423434">Machine Learning</Link></li>
              </div> */}

              {/* title */}
              <div className="blog-details-title">
                <h1>{post.title}</h1>
              </div>
              
              {/* thumb */}
              <div className="blog-details-thumb">
                { post.mainImage && <img src={urlFor(post.mainImage).url()} alt={post.title} /> }
              </div>

              {/* excerpt */}
              <div className="featured-blog-left-excerpt">

                {/* author */}
                <div className="featured-blog-left-excerpt-author">
                    <div className="fetured-blog-left-author-thumb blog-details-author">
                      <Link href={`/author/${post?.author?.slug?.current}`}>
                        { post?.author?.image && <img src={urlFor(post?.author?.image)} alt={post?.author?.name} /> }
                        <span>{post?.author?.name}</span>
                      </Link>
                    </div>
                </div>

                {/* data */}
                <div className="featured-blog-left-excerpt-date">
                  <p> <IoTimeOutline /> Published: {moment(post._createAt).format('LL')}</p>
                </div>
              </div>


              {/* blog content */}
              <div className="blog-content-wrapper">
                <BlockContent blocks={post.body} />
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

export default BlogDetails

export async function getStaticPaths() {
  // const query = `*[_type == "post"] {
  //     slug {
  //         current
  //     }fallback: 'blocking'
  // }`;

  // const posts = await client.fetch(query);
  // const paths = posts.map((post) => ({
  //     params: {
  //       blogDetails: post.slug.current
  //     }
  // }));

  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params: { blogDetails }}) {
  console.log(blogDetails)
  const query = `*[_type == "post" && slug.current == '${blogDetails}'][0] { _id, title, description, mainImage, author->, categories->, body }`;

  const post = await client.fetch(query);

  const headerQuery = '*[_type == "header"]'
  const footerQuery = '*[_type == "footer"]'

  const headers = await client.fetch(headerQuery)
  const footers = await client.fetch(footerQuery)

  return {
      props: {
          post,
          headers,
          footers
      }
  }
}

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'
import Layout from '../../components/Layout'
import { client, urlFor } from '../../lib/client'
import { loadData } from '../api/post'

function AuthorScreen({author, initialPosts, headers, footers}) {

  let [authorPost, setAuthorPost] = useState([]); 

  useEffect(() => {
    setAuthorPost(initialPosts.filter((filterdItem) => filterdItem?.author?._id === author?._id))
  },[author, initialPosts])

  return (
    <>
      <Layout title={author?.name} headers={headers} footers={footers}>
        <section className="author-section">
          <div className="container">
            <div className="author-wrapper">

              {/* author sidebar */}
              <div className="author-sidebar">
                <div className="author-thumb">
                  <Image fill src={urlFor(author?.image)} alt={author?.name} />
                </div>
                <div className="author-excerpt">
                  <h2>{author?.name}</h2>
                  <p className='author-position'>{author?.jobTitle}</p>
                  <p className='author-bio'>{author?.bio}</p>
                  <div className="author-social">
                    <BsFacebook />
                    <BsTwitter />
                    <BsLinkedin />
                  </div>
                </div>
              </div>

              {/* author articles */}
              <div className="author-article-wrapper">

                {/* title */}
                <div className="category-title author-title">
                  <h2>{"Author's articles"}</h2>
                  <div className="underline"></div>
                </div>

                {/* articles */}
                <div className="author-articles">

                  {/* item */}
                  {
                    authorPost?.map((item, index) => (
                      <div key={index} className="latest-article-item author-article-item">
                        <div className="latest-article-thumb">
                          <Link href={`/blog/${item?.slug?.current}`}>
                            <Image fill src={urlFor(item?.mainImage)} alt={item?.title} />
                          </Link>
                          <div className="blog-category">
                            <p>Machine Learning</p>
                          </div>
                        </div>
                        <div className="latest-article-content">
                          <Link href={`/blog/${item?.slug?.current}`}>
                            <h2>{item?.title}</h2>
                            <p>{item?.description}</p>
                          </Link>
                        </div>
                      </div>
                    ))
                  }

                </div>
              </div>

            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default AuthorScreen

export async function getStaticPaths() {
  const query = `*[_type == "author"] {
    slug {
      current
    }
  }`; 

  const authors = await client.fetch(query)
  const paths = authors.map((author) => ({
    params: {
      authorDetails: author.slug.current
    }
  })); 

  return {
    paths,
    fallback: 'blocking'
  }
}; 

export async function getStaticProps({ params: {authorDetails} }) {
  const query =  `*[_type == "author" && slug.current == '${authorDetails}'][0]`; 
  const {posts, total } = await loadData(0, 10)

  const author = await client.fetch(query); 

  const headerQuery = '*[_type == "header"]'
  const footerQuery = '*[_type == "footer"]'

  const headers = await client.fetch(headerQuery)
  const footers = await client.fetch(footerQuery)

  return {
    props: {
      initialPosts: posts,
      author,
      headers,
      footers,
    }
  }
}; 

// export async function getServerSideProps(context) {
//   const {posts, total } = await loadData(0, LOAD_MORE_STEP)
//   return {
//     props: {
//       initialPosts: posts,
//       total
//     },
//   }
// }
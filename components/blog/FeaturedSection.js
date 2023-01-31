import Link from 'next/link'
import React from 'react'
import { IoTimeOutline } from 'react-icons/io5'
import { urlFor } from '../../lib/client'
import moment from 'moment'
import Image from 'next/image'

function FeaturedSection({article}) {
  // console.log("article", article)
  return (
    <>
      <section className="featured-blog-section">
        <div className="container">
          <div className="blog-title">
            <h2>Featured Articles</h2>
          </div>
              <div className="featured-blog-wrapper">
                {/* left */}
                {
                  article?.slice(0, 1).map((item, index) => (
                  
                  <div key={index} className="featured-blog-left-wrap">
                    <div className="featured-blog-left-thumb">
                      <Link href={`/blog/${item?.slug.current}`}>
                        <Image fill src={urlFor(item?.mainImage)} alt="fetatued blog left" />
                      </Link>
                    </div>
                    <div className="featured-blog-left-content">
                      <Link href={`/blog/${item?.slug.current}`}>
                        <h2>{item.title}</h2>
                      </Link>
                      <p>{item.description}</p>

                      {/* excerpt */}
                      <div className="featured-blog-left-excerpt">

                        {/* author */}
                        <div className="featured-blog-left-excerpt-author">
                            <div className="fetured-blog-left-author-thumb">
                              <Link href="/author/84973">
                                <Image fill src={urlFor(item?.author?.image)} alt={item?.author?.name} />
                                <span>{item?.author?.name}</span>
                              </Link>
                            </div>
                        </div>

                        {/* data */}
                        <div className="featured-blog-left-excerpt-date">
                          <p> <IoTimeOutline /> Published: {moment(item?._createdAt).format('LL')}</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  ))
                }

                {/* right */}
                {
                  article?.slice(1,2).map((item, index) => (
                    <div key={index} className="featured-blog-right-wrap">
                        <div className="featured-blog-right-thumb">
                          <Link href={`/blog/${item?.slug.current}`}>
                            <img src={urlFor(item.mainImage)} alt="featured right" />
                          </Link>
                        </div>
                        <div className="featured-blog-right-content">
                          <Link href={`/blog/${item?.slug.current}`}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                          </Link>
                        </div>
                      </div>
                  ))
                }
                
              </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedSection
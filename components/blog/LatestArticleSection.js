import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../lib/client'

function LatestArticleSection({article}) {

  return (
    <>
      <section className="latest-article-section">
        <div className="container">
          <div className="blog-title">
            <h2>Latest Articles</h2>
          </div>
          <div className="latest-article-wrapper">


            {/* item */}
            {
              article?.slice(2, 10).map((item, index) => (
                <div className="latest-article-item">
                <div className="latest-article-thumb">
                  <Link href={`/blog/${item?.slug.current}`}>
                    <img src={urlFor(item?.mainImage)} alt="fetatued blog left" />
                  </Link>
                  <div className="blog-category">
                    <p>Machine Learning</p>
                  </div>
                </div>
                <div className="latest-article-content">
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

export default LatestArticleSection
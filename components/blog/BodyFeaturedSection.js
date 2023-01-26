import Link from 'next/link'
import React from 'react'
import { IoTimeOutline } from 'react-icons/io5'

function BodyFeaturedSection() {
  return (
    <>
      <section className="featured-blog-section">
        <div className="container">
          <div className="featured-blog-wrapper blog-body-featured-wrapper">

            {/* right */}
            <div className="featured-blog-right-wrap">
              <div className="featured-blog-right-thumb">
                <Link href="/blog/4243">
                  <img src="https://www.tidio.com/_next/image/?url=https%3A%2F%2Fwww.tidio.com%2Fwp-content%2Fuploads%2Fchatbot-analytics-2.png&w=1920&q=75" alt="featured right" />
                </Link>
              </div>
              <div className="featured-blog-right-content">
                <Link href="/blog/247289374">
                  <h2>Chatbot Analytics: 9 Key Metrics You Must Track in 2022</h2>
                  <p>Looking to do a chatbot project for your WordPress website? We’ve got the top 10 WordPress chatbot plugins here for you to choose from.</p>
                </Link>
              </div>
            </div>

            {/* left */}
            <div className="featured-blog-left-wrap">
              <div className="featured-blog-left-thumb">
                <Link href='/blog/22424'>
                  <img src="https://res.cloudinary.com/dn1j6dpd7/image/fetch/c_fill,f_auto,h_832,q_auto,w_1856/https://chatbot-blog.labs.livechat.com/app/uploads/2022/09/Rectangle-235804.png" alt="fetatued blog left" />
                </Link>
              </div>
              <div className="featured-blog-left-content">
                <Link href="/blog/423434">
                  <h2>10 Ways to Optimize Website User Experience</h2>
                </Link>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur inventore quidem accusantium saepe, nemo totam quod quam earum magni eos modi obcaecati soluta corporis culpa ratione ipsa aut asperiores. Explicabo?</p>

                {/* excerpt */}
                <div className="featured-blog-left-excerpt">

                  {/* author */}
                  <div className="featured-blog-left-excerpt-author">
                      <div className="fetured-blog-left-author-thumb">
                        <Link href="/author/84973">
                          <img src="https://www.tidio.com/_next/image/?url=https%3A%2F%2Fwww.tidio.com%2Fwp-content%2Fuploads%2Fchatbot-analytics-2.png&w=1920&q=75" alt="" />
                          <span>Suja Krishnan</span>
                        </Link>
                      </div>
                  </div>

                  {/* data */}
                  <div className="featured-blog-left-excerpt-date">
                    <p> <IoTimeOutline /> Published: 23 July, 2023</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BodyFeaturedSection
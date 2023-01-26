import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const tringle = '/assets/images/bg/shape14.png'
const leaf = '/assets/images/bg/tea-leaf.png'

function NewsLetterSection() {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-wrapper">
          <div className="newsletter-excerpt">
            {/* <h2>Start Your Free Trail</h2> */}
            <h2>Start your conversational journey today</h2>
            <p>Building a bot is easy, fun, and proven to get results.</p>
          </div>
          <div className="newsletter-form-wrap">
            {/* <form action="">
              <input required className='newsletter-input' type="text" placeholder='Your email' />
              <button className='newsletter-btn'>Submit</button>
            </form> */}
            <Link href="/demo"><button className='newsletter-btn newsletter-btn-center'>Demo</button></Link>
          </div>
          <Image width={100} height={50} style={{objectFit: "contain"}} className='tringle-shape' src={tringle} alt="" />
        </div>
      </div>
          <Image width={200} height={200} style={{objectFit: "contain"}} className='abs-leaf' src={leaf} alt="" />
    </section>
  )
}

export default NewsLetterSection
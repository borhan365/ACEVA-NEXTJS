import Image from 'next/image'
import React from 'react'
const HeroGif = '../../assets/video/hero-gif.gif'
const illustration = '../../assets/images/bg/illustration-1.png'
const multiLang = '../../assets/images/bg/illustration-1.png'
// const ColumnBg = '../../images/bg/illustration-1.png'
// const ColumnBg = '../../assets/images/bg/illustration-1.png'

function Multi_Channel_Integration_Section() {
  return (
    <>
      <section className='column_section'>
        <div className='container'>
          <div className='column_row'>

            {/* thumb */}
            <div className='column_thumb col_6'>
              <Image 
                src='/assets/images/bg/multi-lang.png' 
                objectFit='contain'
                fill
                alt="robot" /> 
            </div>

            {/* content */}
            <div className='col_6'>
              <div className='column_content_wrap'>
                <h2>Multi-lingual support</h2>
                
                <p>Allows businesses to reach a broader audience, improve communication and make products more accessible.</p>
                <p> Multi-lingual support can provide an opportunity to upsell or cross-sell products, increase customer loyalty, generate more revenue, and achieve their growth objectives.</p>
                {/* <div className='column_buttons'>
                  <a href='/admin'>
                    <button className='btn column_content_btn'>See it in action</button>
                  </a>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Multi_Channel_Integration_Section
import Image from 'next/image'
import React from 'react'
const HeroGif = '../../assets/video/hero-gif.gif'
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
                src='/assets/images/bg/illustration-1.png' 
                objectFit='contain'
                fill
                alt="robot" /> 
            </div>

            {/* content */}
            <div className='col_6'>
              <div className='column_content_wrap'>
                <h2>Multi-channel integration</h2>
                
                <p>Easy integration with any system and platform. It can help businesses improve their customer experience, reduce response time, and increase overall efficiency in managing customer interactions.</p>
                <p> Gives a quick and easy access to your application with only a few clicks.</p>
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
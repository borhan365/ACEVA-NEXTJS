import Image from 'next/image'
import React from 'react'
const ColumnBg = '/assets/images/bg/chat.png'

function Column_Section3() {
  return (
    <section className='column_section'>
        <div className='container'>
          <div className='column_row column-reverse-mobile'>

            {/* content */}
            <div className='col_6'>
              <div className='column_content_wrap analytics_dashboard'>
                <h2>24/7 Availability</h2>
                
                <p>Round-the-clock assistance to customers allowing instant support and quick resolutions to customers queries. </p>
                <p>Reduce response times, minimize waiting times, and improve the overall customer experience. </p>
                {/* <div className='column_buttons'>
                  <a href='/'>
                    <button className='btn column_content_btn'>Learn more</button>
                  </a>
                  </div> */}
              </div>
            </div>

            {/* thumb */}
            <div className='column_thumb col_6'>
              <Image fill src={ColumnBg} alt="robot" style={{objectFit: "contain"}} /> 
            </div>
            
          </div>
        </div>
      </section>
  )
}

export default Column_Section3
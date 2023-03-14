import Image from 'next/image'
import React from 'react'
const ColumnBg = '/assets/images/bg/Home-Commerce.png'

function Column_Section() {
  return (
    <>
      <section className='column_section'>
        <div className='container'>
          <div className='column_row image-float-right'>

            {/* thumb */}
            <div className='column_thumb col_6 column_thumb_one'>
              <Image fill src={ColumnBg} alt="robot" style={{objectFit:"contain"}} /> 
            </div>

            {/* content */}
            <div className='col_6'>
              <div className='column_content_wrap'>
                <h2>Product recommendation</h2>
                
                <p>Enhance the customer experience by providing timely and personalized recommendations. </p>
                <p>Allows businesses to provide a more efficient and personalized customer experience, which can lead to increased customer loyalty and higher customer lifetime value.</p>
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

export default Column_Section
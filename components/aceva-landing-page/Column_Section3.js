import Image from 'next/image'
import React from 'react'
const ColumnBg = '/assets/images/bg/realtime-notification.webp'

function Column_Section3() {
  return (
    <section className='column_section'>
        <div className='container'>
          <div className='column_row'>

            {/* content */}
            <div className='col_6'>
              <div className='column_content_wrap analytics_dashboard'>
                <h2>Real-time notification</h2>
                
                <p>Get mobile notification anytime, anywhere. </p>
                <p>Set your conditions and get notified through a variety of channels, such as email, SMS, or push notifications on a smartphone or other device. </p>
                <p>Help users stay informed and up-to-date on important events and changes.</p>
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
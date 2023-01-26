import React from 'react'
const HomeMarketing = '/assets/images/bg/desktop-screen-dashboard.png'
import Image from 'next/image'

function Column_Section2() {
  return (
    <section className='column_section'>
        <div className='container'>
          <div className='column_row'>

            {/* thumb */}
            <div className='column_thumb col_6'>
              <Image fill objectFit='contain' src={HomeMarketing} alt="robot" /> 
            </div>

            {/* content */}
            <div className='col_6'>
              <div className='column_content_wrap analytics_dashboard'>
                <h2>Business Insights with analytics dashboard</h2>
                
                <p>Analytics dashboard with all the information that matters. </p>
                <p>ACEVA help businesses understand their data, identify trends and patterns, and make data-driven decisions to improve operations and drive growth.</p>
                <p> Connect to the database and visualize your insights with our dashboard tools.</p>
                
                {/* <div className='column_buttons'>
                  <a href='/'>
                    <button className='btn column_content_btn'>Get started</button>
                  </a>
                  </div> */}
              </div>
            </div>

          </div>
        </div>
      </section>
  )
}

export default Column_Section2
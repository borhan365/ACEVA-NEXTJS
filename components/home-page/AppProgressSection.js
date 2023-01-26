import React from 'react'
import appThumb from '../../assets/images/bg/app-bg.png'

function AppProgressSection() {
  return (
    <section className='app-progress-section'>
      <div className="container">
        <div className="app-progress-wrapper">
          <div className="app-progress-thumb">
            <img src={appThumb} alt="app thumb" />
          </div>
          <div className="app-progress-content">
            <span class="sub-title purple-color">App Progress</span>
            <h2>Set Up The Challenges and Track Your Progress</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, maiores, ex consequuntur minus quo aliquid debitis nemo odio, cumque nesciunt ad voluptas eveniet ipsum est deserunt voluptatem? Fugiat, voluptatibus quibusdam?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam officia voluptates aliquam vero aut ad iusto iste natus maiores est?</p>
            <button className="app-progress-button">Start Free Trial</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppProgressSection
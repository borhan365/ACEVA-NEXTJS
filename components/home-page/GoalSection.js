import React from 'react'
import {BsCheck2Square} from 'react-icons/bs'

// import images
import mobileChat from '../../assets/images/bg/chat-mobile.png'

function GoalSection() {
  return (
    <section className='goal-section'>
      <div className='container'> 
        <div className='goal-wrapper'>
          {/* content */}
          <div className="goal-content">
            <span className="goal-sub-title">We Protect You</span>
            <h2>Provide highly-tailored product recommendations</h2>
            <ul className="overview-list">
              <li>
                <div className="overview-icon">
                  <BsCheck2Square />
                </div>
                <span className='overview-span'>Customer churn prediction</span>
              </li>
              <li>
                <div className="overview-icon">
                  <BsCheck2Square />
                </div>
                <span className='overview-span'>Social media monitoring</span>
              </li>
              <li>
                <div className="overview-icon">
                  <BsCheck2Square />
                </div>
                <span className='overview-span'>Preventive maintenance</span>
              </li>
            </ul>
            <button className="overview-button">Get Started Now</button>
          </div>
          {/* thumb */}
          <div className="goal-thumb">
            <img src={mobileChat} alt="mobile chat" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoalSection
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

// import images
import liveChatIcon from '../../assets/images/icons/livechat.png'
import slackIcon from '../../assets/images/icons/slack.png'
import websiteIcon from '../../assets/images/icons/website.png'

function WhatWeOffer() {
  return (
    <section className='what-we-offer-section'>
      <div className="section-title">
        <span className="sub-title purple-color">What We Offer</span>
        <h2>Connect with users across channels</h2>
      </div>
      <div className='container'>
        <div className="what-we-offer-wrapper">

          {/* item */}
          <div className="what-we-offer-item">
            {/* thumb */}
            <div className="what-we-offer-thumb">
              <img src={websiteIcon} alt="icon one" />
            </div>
            {/* content */}
            <div className="what-we-offer-content">
              <h3>Website</h3>
              <p>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit sed est. Our work is delivered by the best team in the world.</p>
              <Link to="#">View More <MdKeyboardArrowRight /></Link>
            </div>
          </div>

          {/* item */}
          <div className="what-we-offer-item">
            {/* thumb */}
            <div className="what-we-offer-thumb">
              <img src={liveChatIcon} alt="icon two" />
            </div>
            {/* content */}
            <div className="what-we-offer-content">
              <h3>LiveChat</h3>
              <p>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit sed est. Our work is delivered by the best team in the world.</p>
              <Link to="#">View More <MdKeyboardArrowRight /></Link>
            </div>
          </div>

          {/* item */}
          <div className="what-we-offer-item">
            {/* thumb */}
            <div className="what-we-offer-thumb">
              <img src={slackIcon} alt="icon one" />
            </div>
            {/* content */}
            <div className="what-we-offer-content">
              <h3>Slack</h3>
              <p>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit sed est. Our work is delivered by the best team in the world.</p>
              <Link to="#">View More <MdKeyboardArrowRight /></Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer
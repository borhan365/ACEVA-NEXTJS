import React from 'react'
const Messenger = '../../assets/images/social-media/Messenger.png'
const WhatsApp = '../../assets/images/social-media/WhatsApp.png'
const GBM = '../../assets/images/social-media/GBM.png'
const Website = '../../assets/images/social-media/Website.png'
const Instagram = '../../assets/images/social-media/Instagram.webp'

function Integrate_Section() {
  return (
    <section className="integrate_section">
      <div className="container">

        {/* title */}
        <div className="brand_title int_title">
          <h2>Make Every Channel Count</h2>
        </div>

        {/* wrapper */}
        <div className="integrate_wrapper">

          {/* item */}
          <div className="integrate_item">
            <div className="int_thumb">
              <img src={WhatsApp} alt="" />
            </div>
            <div className="int_content">
              <h3>WhatsApp</h3>
              <p>From product discovery to payment, our WhatsApp solution makes it easy for your customers to connect with your brand.</p>
            </div>
          </div>

          {/* item */}
          <div className="integrate_item">
            <div className="int_thumb">
              <img src={Messenger} alt="" />
            </div>
            <div className="int_content">
              <h3>Messenger</h3>
              <p>From product discovery to payment, our WhatsApp solution makes it easy for your customers to connect with your brand.</p>
            </div>
          </div>

          {/* item */}
          <div className="integrate_item">
            <div className="int_thumb">
              <img src={Instagram} alt="" />
            </div>
            <div className="int_content">
              <h3>Instagram</h3>
              <p>From product discovery to payment, our WhatsApp solution makes it easy for your customers to connect with your brand.</p>
            </div>
          </div>

          {/* item */}
          <div className="integrate_item">
            <div className="int_thumb">
              <img src={Website} alt="" />
            </div>
            <div className="int_content">
              <h3>Website</h3>
              <p>From product discovery to payment, our WhatsApp solution makes it easy for your customers to connect with your brand.</p>
            </div>
          </div>

          {/* item */}
          <div className="integrate_item">
            <div className="int_thumb">
              <img src={GBM} alt="" />
            </div>
            <div className="int_content">
              <h3>Message</h3>
              <p>From product discovery to payment, our WhatsApp solution makes it easy for your customers to connect with your brand.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Integrate_Section
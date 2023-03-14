import Image from 'next/image'
import React from 'react'
const bestClass = '/assets/images/why-choose/why-choose-ai.png'
const acevaBg = '/assets/images/why-choose/why-choose-wip.png'
const readytogo = '/assets/images/why-choose/why-choose-analytics.png'
function Why_Choose_Section() {
  return (
    <section className="integrate_section why_choose_section">
      <div className="container">

        {/* title */}
        <div className="brand_title int_title">
          <h2>Why <span className="brand-color">ACEVA? </span></h2>
        </div>

        {/* title */}
        {/* <div className="int-brand-title">
        <h2>Why <span className="brand-color">ACEVA? </span></h2>
        </div> */}

        {/* wrapper */}
        <div className="integrate_wrapper why_choose_wrapper">

          {/* item */}
          <div className="integrate_item why_choose_item">
            {/* <div className="int_thumb">
              <Image width={200} height={200} style={{objectFit: "contain"}} src={readytogo} alt="" />
            </div> */}
            <div className="int_content">
              <h3 className='int-one'>75%</h3>
              <p>Improve customer engagement</p>
            </div>
          </div>

          {/* item */}
          <div className="integrate_item why_choose_item">
            {/* <div className="int_thumb">
              <Image width={200} height={200} style={{objectFit: "contain"}} src={bestClass} alt="" />
            </div> */}
            <div className="int_content">
              <h3 className='int-two'>3X</h3>
              <p>increase in sales</p>
            </div>
          </div>

          {/* item */}
          <div className="integrate_item why_choose_item">
            {/* <div className="int_thumb">
              <Image width={200} height={200} style={{objectFit: "contain"}} src={acevaBg} alt="" />
            </div> */}
            <div className="int_content">
              <h3 className='int-three'>45%</h3>
              <p>Increase in repeated purchase</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Why_Choose_Section
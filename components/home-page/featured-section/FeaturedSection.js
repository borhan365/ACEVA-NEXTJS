import React from 'react'

// import images

function FeaturedAreaSection() {
  return (
    <>
      <section className='featured-section'>
        <div className='container'>
          <div className='featured-container'>

            {/* title */}
            <div className='section-title'>
              <span className='sub-title purple-color'>Key Features</span>
              <h2>Most probably included best features ever</h2>
            </div>

            {/* featured wrapper */}
            <div className='featured-wrapper'>

              {/* single item */}
              <div className="single-features-item comment-style">
                {/* <div className="icon">
                  <img src={chatbot} alt="comment" />
                </div> */}
                <h3>Robotic Process Automation</h3>
                <p>Empowering your end users to make accurate data driven decisions requires visible and valid data, powerful predictive metrics and ensured end user engagement.</p>
              </div>

              {/* single item */}
              <div className="single-features-item ai-style">
                {/* <div className="icon">
                  <img src={ai} alt="ai" />
                </div> */}
                <h3>AI Chatbots & Natural Language Processing</h3>
                <p>Imagine a different kind of workforce that you can teach countless skills.  The more it learns, the more efficient it becomes, and it frees up your people to do their best.</p>
              </div>

              {/* single item */}
              <div className="single-features-item analysis-style">
                {/* <div className="icon">
                  <img src={analysis} alt="analysis" />
                </div> */}
                <h3>Analytics & Business Intelligence</h3>
                <p>Empowering your end users to make accurate data driven decisions requires visible and valid data, powerful predictive metrics and ensured end user engagement.</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedAreaSection
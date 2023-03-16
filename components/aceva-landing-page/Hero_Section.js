import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const HeroGif = '/assets/video/hero-gif.gif'

function Hero_Section() {

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  // again changed
  return (
    <>
      <section className='hero-section'>
        <div className='container'>
          <div className='hero-row hero_row'>
            <div className='hero-col-6 hero_col_6'>
              <div className='hero-content-wrap hero_content_wrap'>
                {/* <span className="sm-title">ACEVA</span> */}
                <h1>Looking to <span className='threex-badge'>3x</span> your

                  <div  className="home">
                    <h3 id="resizing-h3" className="" >
                      <span>
                        <div className="stage">
                          <div className="cubespinner">
                            <div className="face face1">Business</div>
                            <div className="face face4">Sales</div>
                          </div>
                        </div>
                      </span>
                    </h3>
                  </div>
                </h1>
                {/* <span className='highlight-text'>Chatbot Business</span> */}
                
                <p>ACEVA is a sales chat that offers real-time assistance, answering questions immediately and guides your customer towards making a purchase.</p>
                <div className='hero-buttons hero_buttons'>
                  <Link href='/demo'>
                    <button className='btn hero-service-button'>Get a Demo</button>
                  </Link>
                  
                    <button onClick={handleScroll} className='btn hero-contact-button'>Contact Us</button>
                  
                </div>
              </div>
            </div>
            <div className='hero-col-6 hero-thumb hero_thumb hero_col_6'>
            {/* <video autoplay="" playsinline="" poster="/images/shared/posters/poster-696x550.svg" style="height: 550px; width: 696px;"><source src="/video/chatbots/hero.mp4" type="video/mp4"><track kind="captions" srclang="en" label="english_captions"></video> */}
            {/* <video className='hero-featured-video' width="600" height="300" autoplay="true" src={HeroVideo} ></video> */}
              {/* <div className='shapes'>
              <img className='' src={shapeOne} alt="shape one" />
              <img src={shapeTwo} alt="shape two" />
              <img src={shapeThree} alt="shape three" />
              <img src={shapeFour} alt="shape four" />
              </div>
              */}
              <Image 
                src={HeroGif} 
                loader={() => HeroGif}
                alt="robot"
                fill
              /> 
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero_Section
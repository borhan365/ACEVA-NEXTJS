import BlockContent from '@sanity/block-content-to-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'
import SocialMedia from './SocialMedia'

// images
const logo = '/assets/images/aceva.png'
const bg = '/assets/images/bg/bg.png'

function Footer({footers}) {

  return (
    <>
    <section className='footer-section'>
      <div className="dia-footer-shape3 position-absolute">
          <Image fill src={bg} alt="bg shape" />
      </div>
      <div className="container">
        {
          footers?.map((item, index) => (
            <div className="footer-wrapper">

              {/* item */}
              <div className="footer-item">

                {/* logo */}
                <div className="footer-item-logo">
                  <Link href="/">
                    {/* <Image width={200} height={200} src={logo} alt="site logo" /> */}
                    { item?.footerLogo && <img src={urlFor(item?.footerLogo)} alt="footer logo" /> }
                  </Link>
                  {/* <h2>
                    <span className="orangered">Wip</span> Data
                  </h2> */}
                </div>

                {/* detials */}
                <div className="footer-company-bio">
                  <p>{item?.bio}</p>
                </div>

                {/* social media */}
                <div className="footer-item-social">
                  <SocialMedia social={item?.social} />
                </div>
              </div>

              {/* item | company detials */}
              <div className="footer-item">
                <div className="footer-title">
                  <h3>Company Details</h3>
                </div>
                <div className="footer-item-list">
                  {item?.footerCompanyDetails?.map((cDetails, cIndex) => (
                    <BlockContent blocks={cDetails} key={cIndex} />
                  ))}
                  {/* <ul>
                    <li>
                      <Link href="/page/about-us"> About Us </Link>
                    </li>
                    <li>
                      <Link href="/page/about-us"> Contact Us </Link>
                    </li>
                    <li>
                      <Link href="/page/about-us"> Privacy Policy </Link>
                    </li>
                    <li>
                      <Link href="/page/about-us"> Terms & Conditions </Link>
                    </li>
                  </ul> */}
                </div>
              </div>

              {/* item | services */}
              <div className="footer-item">
                <div className="footer-title">
                  <h3>Company Services</h3>
                </div>
                <div className="footer-item-list">
                  {item?.footerCompanyService?.map((cDetails, cIndex) => (
                    <BlockContent blocks={cDetails} key={cIndex} />
                  ))}
                  {/* <ul>
                    <li>
                      <Link target="_blank" href='https://www.wipdata.com/bi/'>Business Intelligence</Link>
                    </li>
                    <li>
                      <Link target="_blank" href="https://www.wipdata.com/rpa/">Robotic Process Automation</Link>
                    </li>
                    <li>
                      <Link target="_blank" href="https://www.wipdata.com/ai-chatbots-nlp/">AI Chatbot NLP</Link>
                    </li>
                  </ul> */}
                </div>
              </div>

              {/* item | conteact detials */}
              <div className="footer-item">
                <div className="footer-title">
                  <h3>Headquarters</h3>
                </div>
                <div className="footer-item-list">
                  {item?.headquarters?.map((cDetails, cIndex) => (
                    <BlockContent blocks={cDetails} key={cIndex} />
                  ))}
                  {/* <ul>
                    <li>
                      <span className='footer-address-title'>Phone Number: </span>
                      <span className="footer-address-details"> <Link href="tel:+6011 1123 4515">+6011 1123 4515</Link> </span>
                    </li>
                    <li>
                      <span className='footer-address-title'>Email Address: </span>
                      <span className="footer-address-details">
                        <Link 
                          href="mailto:info@wipdata.com" 
                          // onClick={() => window.location = 'mailto:info@wipdata.com'}
                          > info@wipdata.com</Link>
                        </span>
                    </li>
                    <li>
                      <span className='footer-address-title'>Working Hours: </span>
                      <span className="footer-address-details"> 9:00 AM – 6:00 PM</span>
                    </li>
                    <li>
                      <span className='footer-address-title'>Office: </span>
                      <span className="footer-address-details"> B608, Kelana Square, 47301 Petaling Jaya, Selangor, Malaysia</span>
                    </li>
                  </ul> */}
                </div>
              </div>

            </div>
          ))
        }

      </div>
    </section>

    {/* bottom */}
    <section className="footer-bottom-section">
        <div className="container">
          <div className="footer-bottom">
            <div className="footer-bottom-item">
              <p>Product By <Link href="/"><Image width={10} height={10} src={logo} /> WipData</Link> </p>
            </div>
            <div className="footer-bottom-item">
              <p>© Copyright all right reserved 2022</p>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Footer

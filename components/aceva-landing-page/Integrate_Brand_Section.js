import Image from 'next/image'
import React from 'react'

import { Navigation } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
const logoOne = '/assets/images/brands/forbes.svg'
const WhatsApp = '/assets/images/social-media/whatsapp-2.png'
const Telegram = '/assets/images/social-media/telegram.png'

const dynamic = '/assets/images/brands/dynamics365.png'
const sap = '/assets/images/brands/sap.png'
const salesforce = '/assets/images/brands/salesforce.png'
const oracle = '/assets/images/brands/oracle-erp.png'
const sage = '/assets/images/brands/sage.png'
const robocrop = '/assets/images/brands/robocrop.png'
const infor = '/assets/images/brands/infor.png'

function Integrate_Brand_Section() {
  return (
    <>
      <section className="int-brand-section">
        <div className="container">
          <div className="container-box">
            <div className="int-brand-title">
              <h2>ACEVA integrates with all your work tools</h2>
              <p>Connect ACEVA to dozens of tools and platforms in less than 5 minutes</p>
            </div>
            <div className="int-brand-wrapper">
              <div className="int-brand-two-col-wrap">
                <div className="int-brand-col-item">
                  <Image width={200} height={200} style={{objectFit: "contain"}} src={WhatsApp} alt="w" />
                </div>
                <div className="int-brand-col-item">
                  <Image width={200} height={200} style={{objectFit: "contain"}} src={Telegram} alt="t" />
                </div>
              </div>

              <div className='integrate-brand-wrapper' style={{width:'100%'}}>
                  <Swiper
                  // slidesPerView={7}
                  // spaceBetween={5}
                  slidesPerGroup={1}
                  // centeredSlides={true}
                  loop={true}
                  
                  loopFillGroupWithBlank={false}
                  navigation={true}
                  modules={[Navigation]}
                  className="chatbot-swiper-container"
                  breakpoints={
                    {
                      0: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                      },
                      1024: {
                        slidesPerView: 7,
                        spaceBetween: 10,
                      }
                    }
                  }
                >
                  <SwiperSlide>
                    <div className="int-brand-all-item">
                      <Image width={200} height={200} style={{objectFit: "contain"}} src={dynamic} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="int-brand-all-item">
                      <Image width={200} height={200} style={{objectFit: "contain"}} src={dynamic} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="int-brand-all-item">
                      <Image width={200} height={200} style={{objectFit: "contain"}} src={infor} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="int-brand-all-item">
                      <Image width={200} height={200} style={{objectFit: "contain"}} src={oracle} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="int-brand-all-item">
                      <Image width={200} height={200} style={{objectFit: "contain"}} src={sap} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="int-brand-all-item">
                      <Image width={200} height={200} style={{objectFit: "contain"}} src={robocrop} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="int-brand-all-item">
                      <Image width={200} height={200} style={{objectFit: "contain"}} src={sage} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="int-brand-all-item">
                      <Image width={200} height={200} style={{objectFit: "contain"}} src={salesforce} alt="" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Integrate_Brand_Section
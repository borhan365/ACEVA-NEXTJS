import React from 'react';
// Import Swiper React components
import { A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// images
import partner1 from '../../assets/images/brands/partner2.png';
import partner3 from '../../assets/images/brands/partner3.png';
import partner4 from '../../assets/images/brands/partner4.png';
import partner5 from '../../assets/images/brands/partner5.png';
import partner2 from '../../assets/images/brands/partner6.png';
import partner6 from '../../assets/images/brands/partner7.png';

function PartnerSection() {
  return (
    <section className='partner-section'>
      <div className="container">
      <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade ]}
              spaceBetween={15}
              slidesPerView={4}
              // navigation
              loop
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 4,
                },
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >

              {/* item */}
              <SwiperSlide>
                <div className="partner-item">
                  <img src={partner1} alt="partner one" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-item">
                <img src={partner2} alt="partner two" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-item">
                <img src={partner3} alt="partner three" />
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="partner-item">
                <img src={partner4} alt="partner four" />
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="partner-item">
                <img src={partner5} alt="partner five" />
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="partner-item">
                <img src={partner6} alt="partner six" />
                </div>
              </SwiperSlide>

              {/* item */}
              <SwiperSlide>
                <div className="partner-item">
                  <img src={partner1} alt="partner one" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-item">
                <img src={partner2} alt="partner two" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-item">
                <img src={partner3} alt="partner three" />
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="partner-item">
                <img src={partner4} alt="partner four" />
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="partner-item">
                <img src={partner5} alt="partner five" />
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="partner-item">
                <img src={partner6} alt="partner six" />
                </div>
              </SwiperSlide>

            </Swiper>
        <div className="partner-wrapper">
          
        </div>
      </div>
    </section>
  )
}

export default PartnerSection
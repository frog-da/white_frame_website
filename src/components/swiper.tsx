"use client"
// import React from 'react';
// import {Navigation, Mousewheel} from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';

// import 'swiper/css/mousewheel';


// export default () => (

    //     <Swiper
    //         modules={[Navigation, Mousewheel]}
    //         slidesPerView={3.3}
    //         spaceBetween={30}
    //         freeMode={true}
    //         mousewheel={{
    //             releaseOnEdges: true,
    //             // eventsTarget: '.slider .swiper-wrapper',
    //         }}
    //     >
    
    //         <SwiperSlide>
    //             <div className="projects__items__item">
    //                 <img className="projects__items__item__image" src="/images/project1.jpg"/>
    //                 <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
    //             </div>
    //         </SwiperSlide>
    //         <SwiperSlide>
    //             <div className="projects__items__item">
    //                 <img className="projects__items__item__image" src="/images/project2.jpg"/>
    //                 <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
    //             </div>
    //         </SwiperSlide>
    //         <SwiperSlide>
    //             <div className="projects__items__item">
    //                 <img className="projects__items__item__image" src="/images/project3.jpg" />
    //                 <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
    //             </div>
    //         </SwiperSlide>
    //         <SwiperSlide>
    //             <div className="projects__items__item">
    //                 <img className="projects__items__item__image" src="/images/project4.jpg" />
    //                 <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
    //             </div>
    //         </SwiperSlide>
    //         <SwiperSlide>
    //             <div className="projects__items__item">
    //                 <img className="projects__items__item__image" src="/images/project1.jpg"/>
    //                 <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
    //             </div>
    //         </SwiperSlide>
    //         <SwiperSlide>
    //             <div className="projects__items__item">
    //                 <img className="projects__items__item__image" src="/images/project2.jpg"/>
    //                 <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
    //             </div>
    //         </SwiperSlide>
    //         <SwiperSlide>
    //             <div className="projects__items__item">
    //                 <img className="projects__items__item__image" src="/images/project3.jpg" />
    //                 <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
    //             </div>
    //         </SwiperSlide>
    //         <SwiperSlide>
    //             <div className="projects__items__item">
    //                 <img className="projects__items__item__image" src="/images/project4.jpg" />
    //                 <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
    //             </div>
    //         </SwiperSlide>


    //     </Swiper>
// );

// ScrollableSlider.js
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';


const ScrollableSlider = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
        const block = document.getElementById('projects');
        if (block) {
          const scrollTop = block.scrollTop;
          const scrollHeight = block.scrollHeight - block.clientHeight;
          const percentage = (scrollTop / scrollHeight) * 100;
        }
      };
 
  }, []);


  return (
    <div className="projects">
      <div className="swiper">
        <Swiper
          modules={[Navigation, Mousewheel]}
          slidesPerView={3.3}
          spaceBetween={30}
          freeMode={true}
          mousewheel={{
            releaseOnEdges: true,
          }}
          
        >
            <SwiperSlide>
                <div className="projects__items__item">
                    <img className="projects__items__item__image" src="/images/project1.jpg"/>
                    <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="projects__items__item">
                    <img className="projects__items__item__image" src="/images/project2.jpg"/>
                    <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="projects__items__item">
                    <img className="projects__items__item__image" src="/images/project3.jpg" />
                    <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="projects__items__item">
                    <img className="projects__items__item__image" src="/images/project4.jpg" />
                    <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="projects__items__item">
                    <img className="projects__items__item__image" src="/images/project1.jpg"/>
                    <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="projects__items__item">
                    <img className="projects__items__item__image" src="/images/project2.jpg"/>
                    <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="projects__items__item">
                    <img className="projects__items__item__image" src="/images/project3.jpg" />
                    <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="projects__items__item">
                    <img className="projects__items__item__image" src="/images/project4.jpg" />
                    <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
                </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ScrollableSlider;

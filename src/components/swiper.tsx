"use client"
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,  Scrollbar} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import 'swiper/css/scrollbar';  
import { getSlideTransformEl } from 'swiper/effect-utils';



const makeAllSlidesGray = (event) => {
    const slides = document.getElementsByClassName('swiper-slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('swiper-slide--gray');
    }
}

const makeAllSlidesColor = (event) => {
    const slides = document.getElementsByClassName('swiper-slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('swiper-slide--gray');
    }
}

const ScrollableSlider = () => {
    const swiperRef = useRef(null);
    const handleWheel = () => {
        const block = document.getElementById('projects');
        const content = document.getElementById('content');
        const topOffset = block.getBoundingClientRect().top;
        if (topOffset < 0) {
            const swiperPos = Math.min(Math.abs(topOffset) / (block.clientHeight - 1.7 * content.clientHeight), 1);
            swiperRef.current.swiper.setProgress(swiperPos, 10);
        } else {
            swiperRef.current.swiper.setProgress(0, 10);
        }
        
      };
      document.onwheel = handleWheel;

  return (
   
    <div className="content" id="content">
        <div className="vectors">
            <embed className='folder_icon' src="/vectors/folder_icon.svg" width="40" height="40"/>
            <div className="progress_container">
                <div className="swiper-scrollbar">
                    <div className="swiper-scrollbar-drag"></div>
                </div>
            </div>
            
        </div>

        <div className="projects">
            <div className="swiper">
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Scrollbar]}
                    slidesPerView={'auto'}
                    slidesOffsetAfter={95}
                    slidesOffsetBefore={95}
                    scrollbar={{ draggable: true,
                    dragClass: 'swiper-scrollbar-drag',
                    el: '.swiper-scrollbar',
                    dragSize: 100 }}
                    mousewheel={{
                        enabled: false
                    }}
                >
                    <SwiperSlide>
                        <div className="projects__items__item" onMouseEnter={makeAllSlidesGray} onMouseLeave={makeAllSlidesColor}>
                            <img className="projects__items__item__image" src="/images/project1.jpg"/>
                            <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projects__items__item" onMouseEnter={makeAllSlidesGray} onMouseLeave={makeAllSlidesColor}>
                            <img className="projects__items__item__image" src="/images/project2.jpg"/>
                            <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projects__items__item" onMouseEnter={makeAllSlidesGray} onMouseLeave={makeAllSlidesColor}>
                            <img className="projects__items__item__image" src="/images/project3.jpg" />
                            <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projects__items__item" onMouseEnter={makeAllSlidesGray} onMouseLeave={makeAllSlidesColor}>
                            <img className="projects__items__item__image" src="/images/project4.jpg" />
                            <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projects__items__item" onMouseEnter={makeAllSlidesGray} onMouseLeave={makeAllSlidesColor}>
                            <img className="projects__items__item__image" src="/images/project1.jpg"/>
                            <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projects__items__item" onMouseEnter={makeAllSlidesGray} onMouseLeave={makeAllSlidesColor}>
                            <img className="projects__items__item__image" src="/images/project2.jpg"/>
                            <p className='projects__items__item__p'>Приложение учёта физической активности Meditate</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projects__items__item" onMouseEnter={makeAllSlidesGray} onMouseLeave={makeAllSlidesColor}>
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
    </div>

  );
};

export default ScrollableSlider;

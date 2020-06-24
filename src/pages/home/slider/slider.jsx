import React from 'react';
import './slider.sass';
import Swiper from 'react-id-swiper';

import SliderCard from './../../../components/slider-card/slider-card.jsx';

const params = {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next' ,
        prevEl: '.swiper-button-prev',
      },
    autoplay: {
    delay: 5000
    },
    speed: 1000,
    breakpoints: {
        550: {
          slidesPerView: 1,
        },
        750: {
            slidesPerView: 2,
          },
        1200:{
            slidesPerView: 3
        }
      }
}

export default function Slider(){
    return(
        <div className='slider-section'>
            <Swiper {...params}>
                <SliderCard className='slider-section__card' />
				<SliderCard className='slider-section__card' />
                <SliderCard className='slider-section__card' />
                <SliderCard className='slider-section__card' />
                <SliderCard className='slider-section__card' />
			</Swiper>
        </div>
    )
}
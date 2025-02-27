'use-client';

import React from 'react'
import {useSwiper} from 'swiper/react';
import {PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi';

const SwiperNavButtons = ({
    containerStyles,
    btnStyles,
    iconStyles,
}: {
    containerStyles: string,
    btnStyles: string,
    iconStyles: string,
}) => {
    const swiper = useSwiper();
  return (
    <div className={`${containerStyles}`}>
<button className={`${btnStyles}`}>
    <PiCaretLeftBold className={`${iconStyles}`} onClick={()=> swiper.slidePrev()}/>
   </button>
   <button className={`${btnStyles}`}>
   <PiCaretRightBold className={`${iconStyles}`} onClick={()=> swiper.slideNext()}/>
  </button>
    </div>
  )
}

export default SwiperNavButtons

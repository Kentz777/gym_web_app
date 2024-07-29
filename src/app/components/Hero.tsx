import React from 'react'
import HeroSlide from './HeroSlide'

function Hero() {
  return (
    <section className='bg-hero bg-cover bg-center bg-no-repeat h-[80vh] lg:h-[912px]' id='home'>
      <div className="container mx-auto h-full">
        <HeroSlide/>
      </div>
      </section>
  )
}

export default Hero

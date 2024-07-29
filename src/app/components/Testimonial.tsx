'use-client';
import Image from 'next/image';
import {FaQuoteLeft} from 'react-icons/fa6';

import {Swiper, SwiperSlide} from 'swiper/react';

import {Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
  img: string;
  message: string;
  name: string;
}

const testimonialData = [
  {
    img: '/assets/img/testimonial/lucy.jpg',
    message: 'lorem hehehehehehe',
    name: 'Lucy Anthony',
  },
  {
    img: '/assets/img/testimonial/michael.jpg',
    message: 'lorem hehehehehehe',
    name: 'Michael Smith',
  },
  {
    img: '/assets/img/testimonial/maria.jpg',
    message: 'lorem hehehehehehe',
    name: 'Maria Garcia',
  },
  {
    img: '/assets/img/testimonial/maria.jpg',
    message: 'lorem hehehehehehe',
    name: 'Maria Garcia',
  },
];

import {motion} from 'framer-motion';
import {fadeIn} from '../../../lib/variants'

const Testimonial: React.FC = () => {
  return (
    <section className='py-12 xl:py-28' id='testimonial'>
      <div className='container mx-auto'>
        <h2 className='h2 text-center'>Our Testimonials</h2>
        <div>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
          >
            {testimonialData.map((person, index) => (
              <SwiperSlide className='h-full' key={index}>
                <div>
                  <Image
                    src={person.img}
                    width={90}
                    height={90}
                    alt=''
                    className='rounded-full border-2 border-accent'
                  />
                  <p>{person.message}</p>
                  <h3>{person.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
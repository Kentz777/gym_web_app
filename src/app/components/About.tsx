'use client';

import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { IoIosPricetag } from 'react-icons/io';
import { FaDumbbell } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';
import Achievements from './Achievements';

const featured = [
  {
    icon: <FaUsers />,
    title: 'Award-winning Trainers',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <IoIosPricetag />,
    title: 'Excellent Prices',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <FaDumbbell />,
    title: 'Modern Equipment',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

function About() {
  return (
    <section className='pt-8 pb-14 lg:pt-16 lg:pb-28' id="about">
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-2 mb-8'>
          <motion.h2 
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className='h2'
          >
            About Us
          </motion.h2>
          <motion.p 
           variants={fadeIn('up', 0.6)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: false, amount: 0.2 }}
          className='max-w-[600px] mx-auto text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </motion.p>
        </div>
        <motion.div 
          className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16'
          variants={fadeIn('up', 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          {featured.map((feature, index) => (
            <div 
              className='flex flex-col justify-center items-center gap-4 border p-10'
              key={index}
            >
              <div 
                className='text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center'
              >
                {feature.icon}
              </div>
              <div className='flex flex-col justify-center items-center gap-2 text-center'>
                <h4 className='h4 text-accent'>{feature.title}</h4>
                <p>{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </motion.div>
        <Achievements />
      </div>
    </section>
  );
}

export default About;

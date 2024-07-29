"use-client";

import Image from "next/image";
import Link from "next/link";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

const brandContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const brandItem = {
  hidden: {
    hidden: { y: 20, opacity: 0 },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

function Footer() {
  return (
    <footer className="bg-primary-300 pt-24">
      <div className="container mx-auto pb-24">
      <div className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12">
        <div className="flex flex-col gap-4">
          <Link href="#">
            <Image
              src={"/assets/img/logo.png"}
              width={117}
              height={55}
              alt=""
            />
          </Link>
          <p>Lorem ipsum sajhdsakjhfaskjhajksfhakjs</p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-xl text-accent" />
              <span>Lincoln Park Chicago, Illinois</span>
            </li>
            <li className="flex items-center gap-4">
              <FaPhoneAlt className="text-xl text-accent" />
              <span>(510) 234-2322 (510) 232-48229</span>
            </li>
            <li className="flex items-center gap-4">
              <Link href="#">
                <FaEnvelope className="text-xl text-accent" />
              </Link>

              <span>saulong@gmail.com</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="h4 text-accent mb-4">Recent blog</h4>
          <div
            className="border-b border-dotted border-gray-400 flex flex-col
       gap-3 pb-3 mb-4"
          >
            <Link href="#" className="hover:text-accent transition-all">
              <h5 className="h5 leading-snug">asdfassafsafsafas</h5>
              <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                September, 22, 2024
              </p>
            </Link>
          </div>

          <div
            className="border-b border-dotted border-gray-400 flex flex-col
       gap-3 pb-3 mb-4"
          >
            <Link href="#" className="hover:text-accent transition-all">
              <h5 className="h5 leading-snug">asdfassafsafsafas</h5>
              <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                September, 22, 2024
              </p>
            </Link>
          </div>

          <div
            className="flex flex-col gap-3 pb-3 mb-4"
          >
            <Link href="#" className="hover:text-accent transition-all">
              <h5 className="h5 leading-snug">asdfassafsafsafas</h5>
              <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                September, 22, 2024
              </p>
            </Link>
          </div>
<div className="flex flex-wrap gap-2">
  <h4 className="h4 text-accent mb-4">Gallery</h4>
  <Link href='#'>
  <Image
  src={'/assets/trainers/david.jpg'}
  width={100}
  height={100}
  alt=''
  />
  </Link>
  <Link href='#'>
  <Image
  src={'/assets/trainers/matt.jpg'}
  width={100}
  height={100}
  alt=''
  />
  </Link>
  <Link href='#'>
  <Image
  src={'/assets/trainers/rosy.jpg'}
  width={100}
  height={100}
  alt=''
  />
  </Link>
  <Link href='#'>
  <Image
  src={'/assets/trainers/david.jpg'}
  width={100}
  height={100}
  alt=''
  />
  </Link>
  <Link href='#'>
  <Image
  src={'/assets/trainers/matt.jpg'}
  width={100}
  height={100}
  alt=''
  />
  </Link>
  <Link href='#'>
  <Image
  src={'/assets/trainers/rosy.jpg'}
  width={100}
  height={100}
  alt=''
  />
  </Link>
  <Link href='#'>
  <Image
  src={'/assets/trainers/david.jpg'}
  width={100}
  height={100}
  alt=''
  />
  </Link>
</div>
<div>
  <h4 className="h4 text-accent">Newsletter</h4>
  <div className="flex flex-col gap-4">
    <p>
      elorem ipsum dolor sit amet, consectetur adipis
    </p>
    <form className="flex items-center">
      <input type='text' placeholder='your email..' className="h-[50px]
      outline-none px-4 text-primary-300" />
      <CustomButton containerStyles="h-[50px] px-8" text='Send'/>
    </form>
  </div>
</div>
        </div>
      </div>
      <div className="text-white border-t border-white/20 py-12">
        <div className="flex items-center justify-between h-full">
          <span>&copy; Copyright 2024 Saulong Gym</span>
            <ul className="flex gap-4 text-xl">
              <li>
                <Link 
                href='#'
                className="text-white hover:text-accent transition-all"
                >
                <FaFacebook/>
                </Link>
              </li>
              <li>
                <Link 
                href='#'
                className="text-white hover:text-accent transition-all"
                >
                <FaTwitter/>
                </Link>
              </li>
              <li>
                <Link 
                href='#'
                className="text-white hover:text-accent transition-all"
                >
                <FaYoutube/>
                </Link>
              </li>
            </ul>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

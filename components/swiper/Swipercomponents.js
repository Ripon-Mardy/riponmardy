'use client'
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css'




// ==== import images ====
import pic1 from "./../../public/images/1.jpg"
import pic2 from './../../public/images/2.jpg'
import pic3 from './../../public/images/3.jpg'
import pic4 from './../../public/images/4.jpg'
import pic5 from './../../public/images/5.jpg'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Swipercomponents = () => {

    const textVariants = {
        initial: { opacity: 0.3, y: 20 },
        animate: { opacity: 1, y: 0 }
    }
    return (
        <>
            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    // pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <motion.div
                            initial='initial'
                            animate='animate'
                            variants={textVariants}
                            transition={{ duration: 0.5 }}
                        >
                            <Image src={pic1} ></Image>
                        </motion.div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='object-cover' src={pic2}></Image>

                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={pic3}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={pic4}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={pic5}></Image>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Swipercomponents

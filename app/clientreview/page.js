import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';


// ==== imports images ====
import client1 from './../../public/images/client/testimonial-1.jpg'
import client2 from './../../public/images/client/testimonial-2.jpg'
import client3 from './../../public/images/client/testimonial-3.jpg'
import client4 from './../../public/images/client/testimonial4.jpg'

// ==== import icons ===
import { GoArrowUpRight } from "react-icons/go";
import { RiStarSFill } from "react-icons/ri";


const page = () => {
    const textVariants = {
        initial: { opacity: 0.3, y: 30 },
        animate: { opacity: 1, y: 0 }
    }
    return (
        <>
            <motion.div
                initial='initial'
                animate='animate'
                variants={textVariants}
                transition={{ duration: 0.5 }}
            >

                <div className='flex flex-col gap-4 md:gap-6 md:grid md:grid-cols-2 hover:bg-transparent relative'>
                    <div className='border border-gray-500 p-2 inset-0 bg-gray-800  bg-opacity-90 rounded-lg backdrop-blur-lg hover:bg-transparent duration-200 ease-in-out '>
                        <span className='flex text-yellow-500 mb-2'><RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> </span>
                        <p className='text-sm text-paragraphColor'>"Ripon Mardy delivered a beautiful and highly functional e-commerce site. Their attention to detail and expertise in React.js were outstanding. Highly recommended!"</p>
                        <div className='flex gap-4 mt-4'>
                            <Image src={client1} className='rounded-full w-16'></Image>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-headingColor font-semibold'>Mark Thompson</h1>
                                <span className='text-xs text-paragraphColor'>Founder of Connectify</span>
                            </div>
                        </div>
                    </div>

                    <div className='border border-gray-500 p-2 inset-0 bg-gray-800 bg-opacity-90 rounded-lg backdrop-blur-lg hover:bg-transparent duration-200 ease-in-out'>
                        <span className='flex text-yellow-500 mb-2'><RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> </span>
                        <p className='text-sm text-paragraphColor'>"Ripon Mardy transformed our vision into reality with a seamless social media app. Their skills in Node.js and Express.js are top-notch. Great work!"</p>
                        <div className='flex gap-4 mt-4'>
                            <Image src={client3} className='rounded-full w-16'></Image>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-headingColor font-semibold'>Sarah Johnson</h1>
                                <span className='text-xs text-paragraphColor'>CEO of TrendyShop</span>
                            </div>
                        </div>
                    </div>

                    <div className='border border-gray-500 p-2 inset-0 bg-gray-800 bg-opacity-90 rounded-lg backdrop-blur-lg hover:bg-transparent duration-200 ease-in-out'>
                        <span className='flex text-yellow-500 mb-2'><RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> </span>
                        <p className='text-sm text-paragraphColor'>"We couldn't be happier with the online learning platform ripn mardy developed. The integration of video streaming and real-time notifications was flawless."</p>
                        <div className='flex gap-4 mt-4'>
                            <Image src={client2} className='rounded-full w-16'></Image>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-headingColor font-semibold'>Jessica Lee</h1>
                                <span className='text-xs text-paragraphColor'>Head of Product at LearnNow</span>
                            </div>
                        </div>
                    </div>

                    <div className='border border-gray-500  p-2 inset-0 bg-gray-800 bg-opacity-90 rounded-lg backdrop-blur-lg hidden md:block hover:bg-transparent duration-200 ease-in-out'>
                        <span className='flex text-yellow-500 mb-2'><RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> </span>
                        <p className='text-sm text-paragraphColor'>"Ripon Mardy did a fantastic job on our task management app. The UI is intuitive and the performance is excellent. Truly a professional developer."</p>
                        <div className='flex gap-4 mt-4'>
                            <Image src={client4} className='rounded-full w-16'></Image>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-headingColor font-semibold'>David Martin</h1>
                                <span className='text-xs text-paragraphColor'>Project Manager at TaskPro</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 md:gap-6 md:grid md:grid-cols-2 hover:bg-transparent relative mt-6'>
                    <div className='border border-gray-500 p-2 inset-0 bg-gray-800  bg-opacity-90 rounded-lg backdrop-blur-lg hover:bg-transparent duration-200 ease-in-out '>
                        <span className='flex text-yellow-500 mb-2'><RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> </span>
                        <p className='text-sm text-paragraphColor'>"Ripon Mardy delivered a beautiful and highly functional e-commerce site. Their attention to detail and expertise in React.js were outstanding. Highly recommended!"</p>
                        <div className='flex gap-4 mt-4'>
                            <Image src={client1} className='rounded-full w-16'></Image>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-headingColor font-semibold'>Mark Thompson</h1>
                                <span className='text-xs text-paragraphColor'>Founder of Connectify</span>
                            </div>
                        </div>
                    </div>

                    <div className='border border-gray-500 p-2 inset-0 bg-gray-800 bg-opacity-90 rounded-lg backdrop-blur-lg hover:bg-transparent duration-200 ease-in-out'>
                        <span className='flex text-yellow-500 mb-2'><RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> </span>
                        <p className='text-sm text-paragraphColor'>"Ripon Mardy transformed our vision into reality with a seamless social media app. Their skills in Node.js and Express.js are top-notch. Great work!"</p>
                        <div className='flex gap-4 mt-4'>
                            <Image src={client3} className='rounded-full w-16'></Image>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-headingColor font-semibold'>Sarah Johnson</h1>
                                <span className='text-xs text-paragraphColor'>CEO of TrendyShop</span>
                            </div>
                        </div>
                    </div>

                    <div className='border border-gray-500 p-2 inset-0 bg-gray-800 bg-opacity-90 rounded-lg backdrop-blur-lg hover:bg-transparent duration-200 ease-in-out'>
                        <span className='flex text-yellow-500 mb-2'><RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> </span>
                        <p className='text-sm text-paragraphColor'>"We couldn't be happier with the online learning platform ripn mardy developed. The integration of video streaming and real-time notifications was flawless."</p>
                        <div className='flex gap-4 mt-4'>
                            <Image src={client2} className='rounded-full w-16'></Image>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-headingColor font-semibold'>Jessica Lee</h1>
                                <span className='text-xs text-paragraphColor'>Head of Product at LearnNow</span>
                            </div>
                        </div>
                    </div>

                    <div className='border border-gray-500  p-2 inset-0 bg-gray-800 bg-opacity-90 rounded-lg backdrop-blur-lg hidden md:block hover:bg-transparent duration-200 ease-in-out'>
                        <span className='flex text-yellow-500 mb-2'><RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> <RiStarSFill /> </span>
                        <p className='text-sm text-paragraphColor'>"Ripon Mardy did a fantastic job on our task management app. The UI is intuitive and the performance is excellent. Truly a professional developer."</p>
                        <div className='flex gap-4 mt-4'>
                            <Image src={client4} className='rounded-full w-16'></Image>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-headingColor font-semibold'>David Martin</h1>
                                <span className='text-xs text-paragraphColor'>Project Manager at TaskPro</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default page

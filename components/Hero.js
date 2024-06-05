'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// === import images ===
import profile from './../public/images/profile (2).jpg'
import hey from './../public/images/hey.png'
import pic2 from './../public/images/2.jpg'
import pic3 from './../public/images/5.jpg'

// === impot components ===
// ==== react icons =====
import { FaCalendarWeek } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { RiStarSFill } from "react-icons/ri";

// =-=== projects iamge ==== 
import project2 from './../public/images/projects/project2.jpeg'
import project3 from './../public/images/projects/project3.jpeg'
import project4 from './../public/images/projects/project4.jpg'
import project5 from './../public/images/projects/project1.jpg'


// ==== client images ====
import client1 from './../public/images/client/testimonial-1.jpg'
import client2 from './../public/images/client/testimonial-2.jpg'
import client3 from './../public/images/client/testimonial-3.jpg'
import client4 from './../public/images/client/testimonial4.jpg'

const Hero = () => {

    const textVariants = {
        initial: { opacity: 0.3, y: 30 },
        animate: { opacity: 1, y: 0 }
    }
    return (
        <>
            <div className='py-5 pb-5'>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={textVariants}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className='text-3xl capitalize font-semibold -tracking-tighter text-headingColor'>Ripon Mardy (Axel)</h1>
                    <span className='text-sm font-bold italic text-headingColor'> A web Developer | MERN </span>
                </motion.div>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={textVariants}
                    transition={{ duration: 0.5 }}
                    className='flex gap-4 mt-8'>
                    <Image src={profile} width={150} height={155} alt='profile' className='rounded-xl md:w-48' ></Image>
                    <div className='flex flex-col mt-5 gap-4 hover:text-hoverparagraph'>
                        <Link href='/about' className='flex gap-3 text-headingColor font-semibold items-center hover:text-hoverparagraph'><FaCalendarWeek /> 2+ years Experience</Link>
                        <Link href='https://github.com/Ripon-Mardy?tab=repositories' target='_blank' className='flex gap-3 text-headingColor font-semibold items-center hover:text-hoverparagraph'><FaGithub /> 27 Repositories  </Link>
                        <Link href='/projects' className='flex gap-3 text-headingColor font-semibold items-center hover:text-hoverparagraph'> <FaWandMagicSparkles /> 67+ successfully completed projects </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={textVariants}
                    transition={{ duration: 0.5 }}
                    className='mt-9'>
                    <Image width={50} height={50} src={hey}></Image>
                    <p className='text-sm mt-2 text-paragraphColor md:w-3/4 md:text-lg'> I'm Ripon Mardy, a computer science student who enjoys coding, writing, working-out, and playing football. And I always try to create a creative website. In addition to coding, I also make YouTube videos, where I teach mathematics, creative videos on code, and personal development.</p>
                </motion.div>

                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={textVariants}
                    transition={{ duration: 0.5 }}
                    className='my-10 px-5 md:px-0 md:flex md:gap-20 items-center'>
                    <Image className='w-full  object-cover rounded-lg md:w-1/3 hover:scale-105 duration-200 ease-in-out' src={pic2}></Image>
                    <Image className='hidden md:block w-full rounded-lg md:w-1/3 object-cover hover:scale-105 duration-200 ease-in-out' src={pic3}></Image>
                </motion.div>


                {/* ==== projects==== */}
                <div className='my-5 '>
                    <div className='flex items-center justify-between  mb-5'>
                        <h1 className='text-headingColor font-bold '>Projects</h1>
                        <Link className='flex items-center gap-1 capitalize hover:bg-gray-900 text-sm hover:text-headingColor duration-200 ease-in-out px-1 rounded-sm text-paragraphColor ' href='/projects'>See all <GoArrowUpRight /> </Link>
                    </div>
                    <div className='md:grid md:grid-cols-2 flex flex-col gap-6 hover:text-gray-500'>

                        <div className='border-gray-600 border p-2.5 rounded-md flex justify-between items-center gap-4 hover:text-headingColor duration-200 ease-in-out group  relative overflow-hidden'>
                            <Image className='w-32 rounded-md group-hover:scale-105 duration-200 ease-in-out' src={project2}></Image>
                            <div className='flex flex-col justify-between'>
                                <h1 className='text-sm font-semibold'>Messageing website | Html, CSS, JS | React Js</h1>
                                <span className='text-paragraphColor text-xs font-semibold my-2'>Nov 09, 2023</span>
                                <div className='flex items-center gap-7'>
                                    <a href="https://ripon-mardy.github.io/Message-site/" target='_blank' className='text-sm bg-btnColor px-3 font-semibold rounded-sm hover:bg-btnHover duration-200 ease-in-out'>live</a>
                                    <a href="https://github.com/Ripon-Mardy/Message-site" target='_blank' className='text-sm bg-btnColor px-3 font-semibold rounded-sm hover:bg-btnHover duration-200 ease-in-out'>Github</a>
                                </div>
                            </div>
                        </div>


                        <div className='border-gray-600 border p-2.5 rounded-md flex gap-4 hover:text-headingColor duration-200 ease-in-out group'>
                            <Image className='w-32 group-hover:scale-105 duration-200 ease-in-out' src={project3}></Image>
                            <div className='flex flex-col justify-between'>
                                <h1 className='text-sm font-semibold'>Health-Tracker | Html, CSS , JS, Bootstrap | React JS</h1>
                                <span className='text-paragraphColor text-xs font-semibold my-2'>Dec 23, 2022</span>
                                <div className='flex items-center gap-7'>
                                    <a href="https://ripon-mardy.github.io/Health-Tracker/" target='_blank' className='text-sm bg-btnColor px-3 font-semibold rounded-sm hover:bg-btnHover duration-200 ease-in-out'>live</a>
                                    <a href="https://github.com/Ripon-Mardy/Health-Tracker" target='_blank' className='text-sm bg-btnColor px-3 font-semibold rounded-sm hover:bg-btnHover duration-200 ease-in-out'>Github</a>
                                </div>
                            </div>
                        </div>

                        <div className='border-gray-600 border p-2.5 rounded-md flex gap-4 hover:text-headingColor duration-200 ease-in-out group'>
                            <Image className='w-32 group-hover:scale-105 duration-200 ease-in-out' src={project4}></Image>
                            <div className='flex flex-col justify-between'>
                                <h1 className='text-sm font-semibold'>Form-Validation | Javascript, Validation | React JS | Modern</h1>
                                <span className='text-paragraphColor text-xs font-semibold my-2'>Jan 12, 2023</span>
                                <div className='flex items-center gap-7'>
                                    <a href="https://ripon-mardy.github.io/Form-Validation/" target='_blank' className='text-sm bg-btnColor px-3 font-semibold rounded-sm hover:bg-btnHover duration-200 ease-in-out'>live</a>
                                    <a href="https://github.com/Ripon-Mardy/Form-Validation" target='_blank' className='text-sm bg-btnColor px-3 font-semibold rounded-sm hover:bg-btnHover duration-200 ease-in-out'>Github</a>
                                </div>
                            </div>
                        </div>

                        <div className='border-gray-600 border p-2.5 rounded-md flex gap-4 hover:text-headingColor duration-200 ease-in-out group'>
                            <Image className='w-32 group-hover:scale-105 duration-200 ease-in-out' src={project5}></Image>
                            <div className='flex flex-col justify-between'>
                                <h1 className='text-sm font-semibold'>Marketing Website | Html, CSS, JS , Framer Motion | React JS | client Project</h1>
                                <span className='text-paragraphColor text-xs font-semibold my-2'>Feb 04, 2023</span>
                                <div className='flex items-center gap-7'>
                                    <a href="https://ripon-mardy.github.io/Marketing/" target='_blank' className='text-sm bg-btnColor px-3 font-semibold rounded-sm hover:bg-btnHover duration-200 ease-in-out'>live</a>
                                    <a href="https://github.com/Ripon-Mardy/Marketing" target='_blank' className='text-sm bg-btnColor px-3 font-semibold rounded-sm hover:bg-btnHover duration-200 ease-in-out'>Github</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                {/* === end project section ==== */}

                {/* ==== review sction === */}
                <div>
                    <div className='flex items-center justify-between  mb-5'>
                        <h1 className='text-headingColor font-bold '>Projects</h1>
                        <Link className='flex items-center gap-1 capitalize hover:bg-gray-900 text-sm hover:text-headingColor duration-200 ease-in-out px-1 rounded-sm text-paragraphColor ' href='/projects'>See all <GoArrowUpRight /> </Link>
                    </div>

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
                </div>
                {/* === end review section ==== */}

            </div >
        </>
    )
}

export default Hero

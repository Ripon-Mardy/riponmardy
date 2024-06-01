'use client'
import Swipercomponents from '@/components/swiper/Swipercomponents'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// ==== import images ====
import pic4 from './../../public/images/4.jpg'

// ==== tecnologis picture ====
import html from './../../public/images/tecnologies/html.webp'
import css from './../../public/images/tecnologies/css.webp'
import js from './../../public/images/tecnologies/javascript-icon.webp'
import express from './../../public/images/tecnologies/express-js.png'
import framer from './../../public/images/tecnologies/Framer-Motion-Icon.webp'
import github from './../../public/images/tecnologies/github.webp'
import mongodb from './../../public/images/tecnologies/mongodb.png'
import nextjs from './../../public/images/tecnologies/NextJS-Icon.webp'
import reactjs from './../../public/images/tecnologies/react-icon.webp'
import typescript from './../../public/images/tecnologies/typescript.png'
import nodejs from './../../public/images/tecnologies/nodejs.png'



// === import icons ===
import { MdEmail } from "react-icons/md";
import { CgArrowTopRight } from "react-icons/cg";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const page = () => {


    const textVariants = {
        initial: { opacity: 0.3, y: 20 },
        animate: { opacity: 1, y: 0 }
    }
    return (
        <>
            <div className='pb-12'>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={textVariants}
                    transition={{ duration: 0.4 }}
                >
                    <h1 className='text-3xl font-semibold'>About Me</h1>
                    <span className='text-sm leading-none block text-paragraphColor italic'>Just a quick explanation.</span>
                </motion.div>
                {/* ==== swiper Components === */}
                <div>
                    <Swipercomponents />
                </div>

                <div className='flex flex-col gap-10 py-5'>
                    <div className='flex flex-col  md:flex-row md:gap-44'>
                        <h1 className='text-paragraphColor italic font-semibold'>About</h1>
                        <span className='text-headingColor font-semibold text-lg'>I'm Ripon Mardy!</span>
                    </div>

                    <div className='flex flex-col gap-5 md:flex-row md:gap-28'>
                        <Image width={100} height={100} className='rounded-xl' src={pic4} ></Image>
                        <div>
                            <p className='text-headingColor'>I'm a college student at Wake Tech Community College pursuing an Associate in Science degree. I'll be transferring to NC State University to pursue a Bachelor's degree in Computer Science. With a strong passion for technology, software, and design, I am constantly seeking to expand my knowledge and skills in these areas. I'm also interested in writing and mathematics, and I believe that these subjects complement my technical pursuits. Thank you for visiting my portfolio, and I look forward to sharing my work with you.</p>
                            <p className='mt-3 text-headingColor'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, explicabo!</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5 md:flex-row md:gap-40'>
                        <h1 className='text-paragraphColor italic font-bold capitalize'>Connect</h1>
                        <div>
                            <p>Have a question or just want to chat? Feel free to email me. Try finding me anywhere else at axel_r_m3</p>

                            <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-4 text-headingColor hover:text-gray-400 hover:border-gray-100'>
                                <Link href='/' className='border border-gray-600 rounded-md flex items-center justify-between px-2 p-2 hover:text-headingColor hover:border-gray-600'>
                                    <div className='flex items-center gap-1.5 font-semibold'> <MdEmail />  Email </div>
                                    <CgArrowTopRight />
                                </Link>

                                <Link href='/' className='border border-gray-600 rounded-md flex items-center justify-between px-2 p-2 hover:text-headingColor hover:border-gray-600'>
                                    <div className='flex items-center gap-1.5 font-semibold'> <IoLogoWhatsapp />  WhatsApp </div>
                                    <CgArrowTopRight />
                                </Link>

                                <Link href='/' className='border border-gray-600 rounded-md flex items-center justify-between px-2 p-2 hover:text-headingColor hover:border-gray-600'>
                                    <div className='flex items-center gap-1.5 font-semibold'> <FaInstagramSquare />  Instagram </div>
                                    <CgArrowTopRight />
                                </Link>

                                <Link href='/' className='border border-gray-600 rounded-md flex items-center justify-between px-2 p-2 hover:text-headingColor hover:border-gray-600'>
                                    <div className='flex items-center gap-1.5 font-semibold'> <FaLinkedin />  Linkedin </div>
                                    <CgArrowTopRight />
                                </Link>

                                <Link href='/' className='border border-gray-600 rounded-md flex items-center justify-between px-2 p-2 hover:text-headingColor hover:border-gray-600'>
                                    <div className='flex items-center gap-1.5 font-semibold'> <FaFacebook />  Facebook </div>
                                    <CgArrowTopRight />
                                </Link>

                                <Link href='/' className='border border-gray-600 rounded-md flex items-center justify-between px-2 p-2 hover:text-headingColor hover:border-gray-600'>
                                    <div className='flex items-center gap-1.5 font-semibold'> <FaGithub />  Github </div>
                                    <CgArrowTopRight />
                                </Link>

                                <Link href='/' className='border border-gray-600 rounded-md flex items-center justify-between px-2 p-2 hover:text-headingColor hover:border-gray-600'>
                                    <div className='flex items-center gap-1.5 font-semibold'> <FaYoutube />  Youtube </div>
                                    <CgArrowTopRight />
                                </Link>

                            </div>
                        </div>
                    </div>

                    {/* === skils section === */}

                    <div className='flex flex-col gap-5 md:flex-row md:gap-40'>
                        <h1 className='italic font-semibold text-paragraphColor'>Skills</h1>

                        <div className='grid grid-cols-4 xl:grid-cols-5 md:grid-cols-3 gap-4 object-cover text-center text-xs'>
                            <div className='flex items-center justify-center flex-col gap-2 bg-gray-900 p-1 py-2 rounded-md hover:scale-105 duration-200 ease-in-out'>
                                <Image width={50} height={50} src={html}></Image>
                                <h1 className='font-semibold capitalize text-headingColor'>html</h1>
                            </div>

                            <div className='flex items-center justify-center flex-col gap-2 bg-gray-900 p-1 py-2 rounded-md hover:scale-105 duration-200 ease-in-out'>
                                <Image width={50} height={50} src={css}></Image>
                                <h1 className='font-semibold capitalize text-headingColor'>CSS</h1>
                            </div>

                            <div className='flex items-center justify-center flex-col gap-2 bg-gray-900 p-1 py-2 rounded-md hover:scale-105 duration-200 ease-in-out'>
                                <Image width={50} height={50} src={js}></Image>
                                <h1 className='font-semibold capitalize text-headingColor'>JavaScript</h1>
                            </div>

                            <div className='flex items-center justify-center flex-col gap-2 bg-gray-900 p-1 py-2 rounded-md hover:scale-105 duration-200 ease-in-out'>
                                <Image width={50} height={50} src={reactjs}></Image>
                                <h1 className='font-semibold capitalize text-headingColor'>React Js</h1>
                            </div>

                            <div className='flex items-center justify-center flex-col gap-2 bg-gray-900 p-1 py-2 rounded-md hover:scale-105 duration-200 ease-in-out'>
                                <Image width={50} height={50} src={github}></Image>
                                <h1 className='font-semibold capitalize text-headingColor'>Github</h1>
                            </div>

                            <div className='flex items-center justify-center flex-col gap-2 bg-gray-900 p-1 py-2 rounded-md hover:scale-105 duration-200 ease-in-out'>
                                <Image width={50} height={50} src={framer}></Image>
                                <h1 className='font-semibold capitalize text-headingColor'>Fremer Motion</h1>
                            </div>

                            <div className='flex items-center justify-center flex-col gap-2 bg-gray-900 p-1 py-2 rounded-md hover:scale-105 duration-200 ease-in-out'>
                                <Image width={50} height={50} src={typescript}></Image>
                                <h1 className='font-semibold capitalize text-headingColor'>TypeScript</h1>
                            </div>

                            <div className='flex items-center justify-center flex-col gap-2 bg-gray-900 p-1 py-2 rounded-md hover:scale-105 duration-200 ease-in-out'>
                                <Image width={50} height={50} src={nodejs}></Image>
                                <h1 className='font-semibold capitalize text-headingColor'>Node Js</h1>
                            </div>

                            <div className='flex items-center justify-center flex-col gap-2 bg-gray-900 p-1 py-2 rounded-md hover:scale-105 duration-200 ease-in-out'>
                                <Image width={50} height={50} src={express}></Image>
                                <h1 className='font-semibold capitalize text-headingColor'>Express Js</h1>
                            </div>

                            <div className='flex items-center justify-center flex-col gap-2 bg-gray-900 p-1 py-2 rounded-md hover:scale-105 duration-200 ease-in-out'>
                                <Image width={50} height={50} src={nodejs}></Image>
                                <h1 className='font-semibold capitalize text-headingColor'>Node Js</h1>
                            </div>

                            <div className='flex items-center justify-center flex-col gap-2 bg-gray-900 p-1 py-2 rounded-md hover:scale-105 duration-200 ease-in-out'>
                                <Image width={50} height={50} src={mongodb}></Image>
                                <h1 className='font-semibold capitalize text-headingColor'>MongoDB</h1>
                            </div>

                            <div className='flex items-center justify-center flex-col gap-2 bg-gray-900 p-1 py-2 rounded-md hover:scale-105 duration-200 ease-in-out'>
                                <Image width={50} height={50} src={nextjs}></Image>
                                <h1 className='font-semibold capitalize text-headingColor'>Next Js</h1>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default page

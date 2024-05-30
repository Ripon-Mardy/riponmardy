import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// === import images ===
import profile from './../public/images/profile (2).jpg'
import hey from './../public/images/hey.png'
import pic2 from './../public/images/2.jpg'
import pic3 from './../public/images/5.jpg'


// ==== react icons =====
import { FaCalendarWeek } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

// =-=== projects iamge ==== 
import project1 from './../public/images/projects/project1.png'

const Hero = () => {
    return (
        <>
            <div className='py-5 pb-5'>
                <div>
                    <h1 className='text-3xl capitalize font-semibold -tracking-tighter text-headingColor'>Ripon Mardy.</h1>
                    <span className='text-sm font-bold italic text-headingColor'> A web Developer | MERN </span>
                </div>
                <div className='flex gap-4 mt-8'>
                    <Image src={profile} width={150} height={155} alt='profile' className='rounded-xl md:w-48' ></Image>
                    <div className='flex flex-col mt-5 gap-4 hover:text-hoverparagraph'>
                        <Link href='/' className='flex gap-3 text-headingColor font-semibold items-center hover:text-hoverparagraph'><FaCalendarWeek /> 2+ years Experience</Link>
                        <Link href='/' className='flex gap-3 text-headingColor font-semibold items-center hover:text-hoverparagraph'><FaGithub /> 27 Repositories  </Link>
                        <Link href='/' className='flex gap-3 text-headingColor font-semibold items-center hover:text-hoverparagraph'> <FaWandMagicSparkles /> 67+ successfully completed projects </Link>
                    </div>
                </div>
                <div className='mt-9'>
                    <Image width={50} height={50} src={hey}></Image>
                    <p className='text-sm mt-2 text-paragraphColor md:w-3/4 md:text-lg'> I'm Ripon Mardy, a computer science student who enjoys coding, writing, working-out, and playing football. And I always try to create a creative website. In addition to coding, I also make YouTube videos, where I teach mathematics, creative videos on code, and personal development.</p>
                </div>

                <div className='my-10 px-5 md:px-0 md:flex md:gap-20 items-center'>
                    <Image className='w-full  object-cover rounded-lg md:w-1/3 hover:scale-105 duration-200 ease-in-out' src={pic2}></Image>
                    <Image className='hidden md:block w-full rounded-lg md:w-1/3 object-cover hover:scale-105 duration-200 ease-in-out' src={pic3}></Image>
                </div>


                {/* ==== projects==== */}
                <div className='my-5 '>
                    <div className='flex items-center justify-between  mb-5'>
                        <h1 className='text-headingColor font-bold '>Projects</h1>
                        <Link className='flex items-center gap-1 capitalize hover:bg-gray-900 text-sm hover:text-headingColor duration-200 ease-in-out px-1 rounded-sm text-paragraphColor ' href='/projects'>See all <GoArrowUpRight /> </Link>
                    </div>
                    <div className='md:grid md:grid-cols-2 flex flex-col gap-6 hover:text-gray-500'>
                        <div className='border-gray-600 border p-2.5 rounded-md flex gap-4 hover:text-headingColor duration-200 ease-in-out group  relative overflow-hidden'>
                            <Image className='w-32 rounded-md group-hover:scale-105 duration-200 ease-in-out' src={project1}></Image>
                            <div className='flex flex-col justify-between'>
                                <h1 className='text-sm font-semibold'>Floating Image Gallery | GSAP Scroll Trigger + Flip | React Animation</h1>
                                <span className='text-paragraphColor text-xs font-semibold'>Nov 09, 2023</span>
                                <div className='flex items-center gap-7'>
                                    <a href="#" className='text-sm bg-btnColor px-3 font-semibold rounded-sm hover:bg-btnHover duration-200 ease-in-out'>live</a>
                                    <a href="#" className='text-sm bg-btnColor px-3 font-semibold rounded-sm hover:bg-btnHover duration-200 ease-in-out'>Github</a>
                                </div>
                            </div>
                        </div>

                        <div className='border-gray-600 border p-2.5 rounded-md flex gap-4 hover:text-headingColor duration-200 ease-in-out group'>
                            <Image className='w-32 group-hover:scale-105 duration-200 ease-in-out' src={project1}></Image>
                            <div className='flex flex-col justify-between'>
                                <h1 className='text-sm font-semibold'>Floating Image Gallery | GSAP Scroll Trigger + Flip | React Animation</h1>
                                <span className='text-paragraphColor text-xs font-semibold'>Nov 09, 2023</span>
                                <div className='flex items-center gap-7'>
                                    <a href="#" className='text-sm bg-btnColor px-3 font-semibold rounded-sm hover:bg-btnHover duration-200 ease-in-out'>live</a>
                                    <a href="#" className='text-sm bg-btnColor px-3 font-semibold rounded-sm hover:bg-btnHover duration-200 ease-in-out'>Github</a>
                                </div>
                            </div>
                        </div>

                        <div className='border-gray-600 border p-2.5 rounded-md flex gap-4 hover:text-headingColor duration-200 ease-in-out group'>
                            <Image className='w-32 group-hover:scale-105 duration-200 ease-in-out' src={project1}></Image>
                            <div className='flex flex-col justify-between'>
                                <h1 className='text-sm font-semibold'>Floating Image Gallery | GSAP Scroll Trigger + Flip | React Animation</h1>
                                <span className='text-paragraphColor text-xs font-semibold'>Nov 09, 2023</span>
                                <div className='flex items-center gap-7'>
                                    <a href="#" className='text-sm bg-btnColor px-3 font-semibold rounded-sm hover:bg-btnHover duration-200 ease-in-out'>live</a>
                                    <a href="#" className='text-sm bg-btnColor px-3 font-semibold rounded-sm hover:bg-btnHover duration-200 ease-in-out'>Github</a>
                                </div>
                            </div>
                        </div>

                        <div className='border-gray-600 border p-2.5 rounded-md flex gap-4 hover:text-headingColor duration-200 ease-in-out group'>
                            <Image className='w-32 group-hover:scale-105 duration-200 ease-in-out' src={project1}></Image>
                            <div className='flex flex-col justify-between'>
                                <h1 className='text-sm font-semibold'>Floating Image Gallery | GSAP Scroll Trigger + Flip | React Animation</h1>
                                <span className='text-paragraphColor text-xs font-semibold'>Nov 09, 2023</span>
                                <div className='flex items-center gap-7'>
                                    <a href="#" className='text-sm bg-btnColor px-3 font-semibold rounded-sm hover:bg-btnHover duration-200 ease-in-out'>live</a>
                                    <a href="#" className='text-sm bg-btnColor px-3 font-semibold rounded-sm hover:bg-btnHover duration-200 ease-in-out'>Github</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                {/* === end project section ==== */}

            </div >
        </>
    )
}

export default Hero

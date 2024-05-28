import React from 'react'
import Image from 'next/image'

// === import images ===
import profile from './../public/images/profile (2).jpg'
import hey from './../public/images/hey.png'


// ==== react icons =====
import { FaCalendarWeek } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";

const Hero = () => {
    return (
        <>
            <div className='pt-5'>
                <div>
                    <h1 className='text-3xl capitalize font-semibold -tracking-tighter text-headingColor'>Ripon Mardy.</h1>
                    <span className='text-sm font-bold italic text-headingColor'> A web Developer | MERN </span>
                </div>
                <div className='flex gap-4 mt-8'>
                    <Image src={profile} width={150} height={155} alt='profile' className='rounded-xl md:w-48' ></Image>
                    <div className='flex flex-col mt-5 gap-4'>
                        <span className='flex gap-3 text-headingColor font-semibold items-center'><FaCalendarWeek /> 2+ years Experience</span>
                        <span className='flex gap-3 text-headingColor font-semibold items-center'><FaGithub /> 27 Repositories  </span>
                        <span className='flex gap-3 text-headingColor font-semibold items-center'> <FaWandMagicSparkles /> 67+ successfully completed projects </span>
                    </div>
                </div>
                <div className='mt-9'>
                    <Image width={50} height={50} src={hey}></Image>
                    <p className='text-sm mt-2 text-paragraphColor md:w-3/4 md:text-lg'> I'm Ripon Mardy, a computer science student who enjoys coding, writing, working-out, and playing football. And I always try to create a creative website. In addition to coding, I also make YouTube videos, where I teach mathematics, creative videos on code, and personal development.</p>
                </div>
            </div >
        </>
    )
}

export default Hero

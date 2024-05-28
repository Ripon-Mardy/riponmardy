import React from 'react'
import Image from 'next/image'

// === import images ===
import profile from './../public/images/profile (2).jpg'


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
                    <span className='text-sm font-bold italic text-paragraphColor'> A web Developer | MERN </span>
                </div>
                <div className='flex gap-4 mt-8'>
                    <Image src={profile} width={150} height={155} alt='profile' className='rounded-xl' ></Image>
                    <div className='flex flex-col mt-5 gap-4'>
                        <span className='flex gap-3 text-headingColor font-semibold'><FaCalendarWeek /> 2+ years Experience</span>
                        <span className='flex gap-3 text-headingColor font-semibold'><FaGithub /> 27 Repositories  </span>
                        <span className='flex gap-3 text-headingColor font-semibold'> <FaWandMagicSparkles /> 67+ successfully completed projects </span>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Hero

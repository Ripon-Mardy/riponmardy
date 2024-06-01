'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const page = () => {

    const [projectActive, SetProjectActive] = useState('')

    const handleProject = (tabnumber) => {
        console.log(tabnumber);
    }

    return (
        <>
            <div>
                <div className='leading-none'>
                    <h1 className='text-3xl font-semibold text-headingColor capitalize'>projects</h1>
                    <span className='text-sm italic text-paragraphColor leading-none font-semibold'>my all projects</span>
                </div>

                {/* ==== projects menu ===== */}
                <div className='mt-6'>
                    <ul className='flex items-center justify-center flex-wrap gap-3 md:gap-4'>
                        <Link href='/' onClick={() => handleProject(1)} className='text-sm font-semibold border border-gray-500 p-1 px-2 rounded-sm cursor-pointer hover:bg-btnHover duration-200 ease-in-out'>All</Link>
                        <Link href='/' onClick={() => handleProject(2)} className='text-sm font-semibold border border-gray-500 p-1 px-2 rounded-sm cursor-pointer hover:bg-btnHover duration-200 ease-in-out'>React JS</Link>
                        <Link href='/' onClick={() => handleProject(3)} className='text-sm font-semibold border border-gray-500 p-1 px-2 rounded-sm cursor-pointer hover:bg-btnHover duration-200 ease-in-out'>Landing Page</Link>
                        <Link href='/' onClick={() => handleProject(4)} className='text-sm font-semibold border border-gray-500 p-1 px-2 rounded-sm cursor-pointer hover:bg-btnHover duration-200 ease-in-out'>Tailwind CSS</Link>
                        <Link href='/' onClick={() => handleProject(5)} className='text-sm font-semibold border border-gray-500 p-1 px-2 rounded-sm cursor-pointer hover:bg-btnHover duration-200 ease-in-out'>E-commerce</Link>
                        <Link href='/' onClick={() => handleProject(6)} className='text-sm font-semibold border border-gray-500 p-1 px-2 rounded-sm cursor-pointer hover:bg-btnHover duration-200 ease-in-out'>Wordpress</Link>
                        <Link href='/' onClick={() => handleProject(7)} className='text-sm font-semibold border border-gray-500 p-1 px-2 rounded-sm cursor-pointer hover:bg-btnHover duration-200 ease-in-out'>Full Stack</Link>
                        <Link href='/' onClick={() => handleProject(8)} className='text-sm font-semibold border border-gray-500 p-1 px-2 rounded-sm cursor-pointer hover:bg-btnHover duration-200 ease-in-out'>Next JS</Link>
                    </ul>
                </div>
                {/* ==== show projects menu ==== */}
                <div>


                </div>
            </div>
        </>
    )
}

export default page

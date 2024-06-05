'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import allProjects from '../../projects.json'

const page = () => {
    const [projectActive, setProjectActive] = useState([]);
    const [activeColor, setActiveColor] = useState('All');
    const [isShowMore, setIsShowMore] = useState(true);
    useEffect(() => {
        setProjectActive(allProjects.slice(0, 8))
    }, [])

    const handleProject = tabnumber => {
        setActiveColor(tabnumber)
        console.log(tabnumber)
        if (tabnumber === 'All') {
            setProjectActive(allProjects)
        } else {
            const filterCategories = allProjects.filter(
                item => item.category === tabnumber
            )
            setProjectActive(filterCategories)

        }
    }

    const handleShowMore = () => {
        setProjectActive(allProjects.slice(0, 20))
        setIsShowMore(false)
    }

    console.log(projectActive)

    const textVariants = {
        initial: { opacity: 0.3, y: 30 },
        animate: { opacity: 1, y: 0 }
    }

    // const allprojectsList = allProjects
    // console.log("all project list", allprojectsList);

    return (
        <>
            <div className='pb-5'>
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={textVariants}
                    transition={{ duration: 0.5 }}
                    className='leading-none'
                >
                    <h1 className='text-3xl font-semibold text-headingColor capitalize'>
                        projects
                    </h1>
                    <span className='text-sm italic text-paragraphColor leading-none font-semibold'>
                        my all projects
                    </span>
                </motion.div>

                {/* ==== projects menu ===== */}
                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={textVariants}
                    transition={{ duration: 0.5 }}
                    className='mt-10'
                >
                    <ul className='flex items-center justify-center flex-wrap gap-3 md:gap-4'>
                        <Link
                            href='#'
                            className={`text-sm font-semibold border border-gray-500 p-1 px-2 rounded-sm cursor-pointer hover:bg-btnHover duration-200 ease-in-out ${activeColor === 'All' ? 'bg-btnHover' : 'bg-transparent'
                                } `}
                            onClick={() => handleProject('All')}
                        >
                            All
                        </Link>

                        <Link
                            href='#'
                            onClick={() => handleProject('React JS')}
                            className={`text-sm font-semibold border border-gray-500 p-1 px-2 rounded-sm cursor-pointer hover:bg-btnHover duration-200 ease-in-out ${activeColor === 'React JS' ? 'bg-btnHover' : 'bg-transparent'
                                } `}
                        >
                            React JS
                        </Link>

                        <Link
                            href='#'
                            onClick={() => handleProject('Landing Page')}
                            className={`text-sm font-semibold border border-gray-500 p-1 px-2 rounded-sm cursor-pointer hover:bg-btnHover duration-200 ease-in-out ${activeColor === 'Landing Page'
                                ? 'bg-btnHover'
                                : 'bg-transparent'
                                } `}
                        >
                            Landing Page
                        </Link>

                        <Link
                            href='#'
                            onClick={() => handleProject('Tailwind CSS')}
                            className={`text-sm font-semibold border border-gray-500 p-1 px-2 rounded-sm cursor-pointer hover:bg-btnHover duration-200 ease-in-out ${activeColor === 'Tailwind CSS'
                                ? 'bg-btnHover'
                                : 'bg-transparent'
                                } `}
                        >
                            Tailwind CSS
                        </Link>

                        <Link
                            href='#'
                            onClick={() => handleProject('E-commerce')}
                            className={`text-sm font-semibold border border-gray-500 p-1 px-2 rounded-sm cursor-pointer hover:bg-btnHover duration-200 ease-in-out ${activeColor === 'E-commerce' ? 'bg-btnHover' : 'bg-transparent'
                                } `}
                        >
                            E-commerce
                        </Link>

                        <Link
                            href='#'
                            onClick={() => handleProject('Wordpress')}
                            className={`text-sm font-semibold border border-gray-500 p-1 px-2 rounded-sm cursor-pointer hover:bg-btnHover duration-200 ease-in-out ${activeColor === 'Wordpress' ? 'bg-btnHover' : 'bg-transparent'
                                } `}
                        >
                            Wordpress
                        </Link>

                        <Link
                            href='#'
                            onClick={() => handleProject('Full Stack')}
                            className={`text-sm font-semibold border border-gray-500 p-1 px-2 rounded-sm cursor-pointer hover:bg-btnHover duration-200 ease-in-out ${activeColor === 'Full Stack' ? 'bg-btnHover' : 'bg-transparent'
                                } `}
                        >
                            Full Stack
                        </Link>
                    </ul>
                </motion.div>
                {/* ==== show projects menu ==== */}
                <div className='mt-8'>
                    <div className='grid grid-cols-3 md:grid-cols-4 gap-4 '>
                        {projectActive.map((item, index) => (
                            <motion.div
                                initial='initial'
                                animate='animate'
                                variants={textVariants}
                                transition={{ duration: 0.5 }}
                                key={index}
                                className='border border-gray-700 p-1 flex flex-col items-center md:py-2 rounded-md'
                            >
                                <Image
                                    width={190}
                                    height={190}
                                    alt='projects'
                                    src={item.image}
                                    className='rounded-lg object-cover hover:scale-105 duration-200 ease-in-out'
                                ></Image>
                                <div className='flex items-center justify-between gap-3 md:gap-10 px-1 md:px-6  mt-4'>
                                    <Link
                                        className=' bg-btnHover px-1 text-sm rounded-sm font-semibold text-headingColor hover:bg-btnHover'
                                        href={item.live}
                                        target='_blank'
                                    >
                                        Live
                                    </Link>
                                    <Link
                                        target='_blank'
                                        className=' bg-btnHover px-1 text-sm rounded-sm font-semibold text-headingColor hover:bg-btnHover'
                                        href={item.github}
                                    >
                                        Github
                                    </Link>
                                </div>
                                {/* <span className='text-sm'> {item.title} </span> */}
                            </motion.div>
                        ))}

                    </div>
                </div>
                <div className='mt-4 text-center'>

                    <button onClick={handleShowMore} className='block text-lg font-semibold rounded-sm px-2 p-1 bg-gray-500'> {isShowMore ? "see more" : "see more"} </button>

                </div>

                {/* === aviable for freelancing ==== */}
                <div className='py-5'>
                    <div className=' p-4 block bg-image text-center' >
                        <h1 className='md:text-4xl text-lg text-headingColor font-semibold capitalize'>I am available for freelancing</h1>
                        <Link href={'https://wa.me/+8801320585642'} target='_blank' className='text-sm font-semibold bg-gray-500 rounded-sm px-4 mt-3 inline-block hover:bg-gray-800 duration-200 ease-in-out'>contact Me on Whatsapp</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page

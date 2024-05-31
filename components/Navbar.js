'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'

// ==== imports icons ====
import { AiOutlineMenu } from 'react-icons/ai'
import { IoHome } from 'react-icons/io5'
import { PiMagicWandFill } from 'react-icons/pi'
import { FaBlog } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa'
import { GiStarFormation } from 'react-icons/gi'
import { FaAddressCard } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'

const Navbar = () => {

    const [showNav, setShowNav] = useState(false)

    const clickMenu = () => {
        setShowNav(!showNav)
    }

    const textVariants = {
        initial: { opacity: 0.3, y: 10 },
        animate: { opacity: 1, y: 0 }
    }

    const closeMenu = () => {
        setShowNav(!showNav)
    }
    const navRef = useRef(null)

    return (
        <>
            <div className='bg-gray-900 md:bg-transparent p-1 container mx-auto relative z-10'>
                <div className=' flex md:flex-col items-center md:items-start justify-between  w-full md:w-[20%] px-2 container mx-auto md:fixed'>
                    <Link href='/' className='leading-none'>
                        <h1 className='text-2xl font-extrabold'>Ripon M.</h1>
                        <span className='font-bold italic text-gray-300 text-xs'>
                            Web Developer | MERN
                        </span>
                    </Link>

                    {/* ==== desktop menu === */}
                    <motion.div ref={navRef} initial='initial' animate='animate' variants={textVariants} className='hidden md:block md:w-3/4 md:mt-5'>
                        <div className='flex flex-col gap-4 hover:text-hoverparagraph z-10'>
                            <motion.div
                                ref={navRef}
                                initial='initial'
                                animate='animate'
                                variants={textVariants}
                            >
                                <Link
                                    className=' hover:opacity-100 flex gap-3 items-center border border-gray-700 p-2 text-sm rounded-md capitalize font-light hover:text-white'
                                    href='/'
                                >
                                    <IoHome /> Home
                                </Link>
                            </motion.div>
                            <motion.div
                                initial='initial'
                                animate='animate'
                                variants={textVariants}
                                transition={{ duration: 0.1 }}
                            >
                                <Link
                                    className=' flex gap-3 items-center border border-gray-700 p-2 text-sm rounded-md capitalize font-light hover:text-white'
                                    href='/resume'
                                >
                                    <FaAddressCard /> Reusme
                                </Link>
                            </motion.div>
                            <motion.div
                                initial='initial'
                                animate='animate'
                                variants={textVariants}
                                transition={{ duration: 0.2 }}
                            >
                                <Link
                                    className='flex gap-3 items-center border border-gray-700 p-2 text-sm rounded-md capitalize font-light hover:text-white'
                                    href='/projects'
                                >
                                    <PiMagicWandFill /> Projects
                                </Link>
                            </motion.div>

                            <motion.div
                                initial='initial'
                                animate='animate'
                                variants={textVariants}
                            >
                                <Link
                                    className='flex gap-3 items-center border border-gray-700 p-2 text-sm rounded-md capitalize font-light hover:text-white'
                                    href='/blogs'
                                >
                                    <FaBlog /> Blogs
                                </Link>
                            </motion.div>

                            <motion.div
                                initial='initial'
                                animate='animate'
                                variants={textVariants}
                                transition={{ duration: 0.4 }}
                            >
                                <Link
                                    className='flex gap-3 items-center border border-gray-700 p-2 text-sm rounded-md capitalize font-light hover:text-white'
                                    href='/about'
                                >
                                    <FaUser /> About
                                </Link>
                            </motion.div>

                            <motion.div
                                initial='initial'
                                animate='animate'
                                variants={textVariants}
                                transition={{ duration: 0.5 }}
                            >
                                <Link
                                    className='flex gap-3 items-center border border-gray-700 p-2 text-sm rounded-md capitalize font-light hover:text-white'
                                    href='/others'
                                >
                                    <GiStarFormation /> Others
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div variants={textVariants} initial='initial' animate='animate' className='hidden md:block md:mt-5'>
                        <div className='flex flex-col gap-2 hover:text-gray-400'>
                            <div>
                                <h1 className=' font-bold text-sm'>SOCIAL</h1>
                            </div>
                            <Link
                                className='flex gap-3 items-center  border-gray-700 p-2 text-sm rounded-md capitalize font-light hover:text-white'
                                href='/'
                            >
                                <FaLinkedin /> Linkedin
                            </Link>
                            <Link
                                className='flex gap-3 items-center  border-gray-700 p-2 text-sm rounded-md capitalize font-light hover:text-white'
                                href='/'
                            >
                                <FaFacebook /> Facebook
                            </Link>
                            <Link
                                className='flex gap-3 items-center  border-gray-700 p-2 text-sm rounded-md capitalize font-light hover:text-white'
                                href='/'
                            >
                                <FaInstagram /> Instagram
                            </Link>
                            <Link
                                className='flex gap-3 items-center  border-gray-700 p-2 text-sm rounded-md capitalize font-light hover:text-white'
                                href='/'
                            >
                                <FaGithub /> Github
                            </Link>
                            <Link
                                className='flex gap-3 items-center  border-gray-700 p-2 text-sm rounded-md capitalize font-light hover:text-white'
                                href='/'
                            >
                                <MdEmail /> Email
                            </Link>
                        </div>
                    </motion.div>

                    {/* ====menu button ==== */}
                    <div
                        onClick={clickMenu}
                        className='text-2xl cursor-pointer border border-gray-500 p-1 rounded-sm duration-1000 md:hidden'
                    >
                        {showNav ? <IoClose /> : <AiOutlineMenu />}
                    </div>
                    {/* === end menu button === */}

                    {/* ==== mobile menu ===== */}
                    <AnimatePresence>
                        {showNav && (
                            <motion.div
                                ref={navRef}
                                initial={{ x: '-100%' }}
                                animate={{ x: '0' }}
                                variants={textVariants}
                                transition={{ duration: '0.3' }}
                                exit={{ x: '-100%', duration: '0.3' }}
                                className='absolute left-0 top-0  h-screen bg-gray-900 w-3/5 p-3'
                            >
                                <div className='flex justify-between flex-col h-[66%]'>
                                    <Link href='/' className='leading-none mb-4' onClick={closeMenu}>
                                        <h1 className='text-2xl font-extrabold'>Ripon M.</h1>
                                        <span className='font-semibold text-gray-300 text-xs '>
                                            Web Developer
                                        </span>
                                    </Link>

                                    <div className='flex flex-col gap-4 mb-10 mt-4'>
                                        <Link
                                            onClick={closeMenu}
                                            className='flex gap-3 items-center border border-gray-700 p-2 text-sm rounded-md capitalize font-light'
                                            href='/'
                                        >
                                            <IoHome /> Home
                                        </Link>
                                        <Link
                                            onClick={closeMenu}
                                            className='flex gap-3 items-center border border-gray-700 p-2 text-sm rounded-md capitalize font-light'
                                            href='/resume'
                                        >
                                            <FaAddressCard /> Resume
                                        </Link>
                                        <Link
                                            onClick={closeMenu}
                                            className='flex gap-3 items-center border border-gray-700 p-2 text-sm rounded-md capitalize font-light'
                                            href='/projects'
                                        >
                                            <PiMagicWandFill /> Projects
                                        </Link>
                                        <Link
                                            onClick={closeMenu}
                                            className='flex gap-3 items-center border border-gray-700 p-2 text-sm rounded-md capitalize font-light'
                                            href='/blogs'
                                        >
                                            <FaBlog /> Blogs
                                        </Link>
                                        <Link
                                            onClick={closeMenu}
                                            className='flex gap-3 items-center border border-gray-700 p-2 text-sm rounded-md capitalize font-light'
                                            href='/about'
                                        >
                                            <FaUser /> About
                                        </Link>
                                        <Link
                                            onClick={closeMenu}
                                            className='flex gap-3 items-center border border-gray-700 p-2 text-sm rounded-md capitalize font-light'
                                            href='/others'
                                        >
                                            <GiStarFormation /> Others
                                        </Link>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <div>
                                            <h1 className=' font-bold text-sm'>SOCIAL</h1>
                                        </div>
                                        <Link
                                            className='flex gap-3 items-center  border-gray-700 p-2 text-sm rounded-md capitalize font-light'
                                            href='/'
                                        >
                                            <FaLinkedin /> Linkedin
                                        </Link>
                                        <Link
                                            className='flex gap-3 items-center  border-gray-700 p-2 text-sm rounded-md capitalize font-light'
                                            href='/'
                                        >
                                            <FaFacebook /> Facebook
                                        </Link>
                                        <Link
                                            className='flex gap-3 items-center  border-gray-700 p-2 text-sm rounded-md capitalize font-light'
                                            href='/'
                                        >
                                            <FaInstagram /> Instagram
                                        </Link>
                                        <Link
                                            className='flex gap-3 items-center  border-gray-700 p-2 text-sm rounded-md capitalize font-light'
                                            href='/'
                                        >
                                            <FaGithub /> Github
                                        </Link>
                                        <Link
                                            className='flex gap-3 items-center  border-gray-700 p-2 text-sm rounded-md capitalize font-light'
                                            href='/'
                                        >
                                            <MdEmail /> Email
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* === end mobile menu === */}
                </div>
            </div>
        </>
    )
}

export default Navbar

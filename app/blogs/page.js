'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'



// ==== json data ====
import blogsJson from './../../blogs.json'

const page = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        setBlogs(blogsJson)
    }, [])

    const textVariants = {
        initial: { opacity: 0.3, y: 30 },
        animate: { opacity: 1, y: 0 }
    }


    return (
        <div className='pb-5'>
            <div
                initial='initial'
                animate='animate'
                variants={textVariants}
                transition={{ duration: 0.5 }}
                className='leading-none'
            >
                <h1 className='text-3xl font-semibold text-headingColor capitalize'>
                    Blogs
                </h1>
                <span className='text-sm italic text-paragraphColor leading-none font-semibold'>
                    my all Blogs
                </span>
            </div>
            {/* ==== blog content === */}
            <div className='mt-6'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    {
                        blogs.map((item, index) => (
                            <Link href={`/blogs/${item.id}`} key={index} className='border border-gray-500 p-2 rounded-sm'>
                                <Image width={100} height={100} src={item.image} className='mx-auto' alt='blogs'></Image>
                                <div className='mt-3'>
                                    <h1 className='text-headingColor font-semibold text-sm mb-2 leading-none'> {item.title} </h1>
                                    <span className='text-xs leading-none'> {item.subTitle} </span>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default page

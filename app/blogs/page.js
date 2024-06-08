'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// ==== import blogs images ====
import blog1 from './../../public/images/blog/blog1.png'

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
            <div>
                {
                    blogs.map((item, index) => (
                        <div>
                            {item.title}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default page

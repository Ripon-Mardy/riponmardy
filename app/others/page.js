'use client'
import React from 'react'
import { motion } from 'framer-motion'

const page = () => {
    const textVariants = {
        initial: { opacity: 0.3, y: 30 },
        animate: { opacity: 1, y: 0 }
    }
    return (
        <div>
            <motion.div

                initial='initial'
                animate='animate'
                variants={textVariants}
                transition={{ duration: 0.5 }}
                className='leading-none'
            >
                <h1 className='text-3xl font-semibold text-headingColor capitalize'>
                    Others
                </h1>
                <span className='text-sm italic text-paragraphColor leading-none font-semibold'>
                    chack it out
                </span>
            </motion.div>
        </div>
    )
}

export default page

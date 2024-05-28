import Swipercomponents from '@/components/swiper/Swipercomponents'
import React from 'react'

const page = () => {
    return (
        <>
            <div>
                <div>
                    <h1 className='text-3xl font-semibold'>About Me</h1>
                    <span className='text-sm leading-none block text-paragraphColor italic'>Just a quick explanation.</span>
                </div>
                {/* ==== swiper Components === */}
                <div>
                    <Swipercomponents />
                </div>
            </div>
        </>
    )
}

export default page

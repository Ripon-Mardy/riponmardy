'use client'

import blogjson from './../../../blogs.json'

const page = ({ params }) => {
    const id = params.blog

    const blogpost = blogjson.find(blog => blog.id === id)

    return (
        <div>
            <h1 className='text-xl md:text-2xl font-semibold text-headingColor '>{blogpost.title}</h1>
            <span className='text-sm italic md:text-lg'>  {blogpost.subTitle} </span>
            <span className='text-xs block text-paragraphColor'> {blogpost.date} </span>
            <p className='mt-3 text-paragraphColor text-sm md:text-lg'> {blogpost.content} </p>
        </div>
    )
}

export default page

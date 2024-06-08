'use client'

import blogjson from './../../../blogs.json'

const page = ({ params }) => {
    const id = params.blog

    const blogpost = blogjson.find(blog => blog.id === id)

    return (
        <div>
            <h1 className='text-xl font-semibold text-headingColor '>{blogpost.title}</h1>
            <span className='text-sm italic'>  {blogpost.subTitle} </span>
            <span className='text-xs block text-paragraphColor'> {blogpost.date} </span>
            <p className='mt-3 text-paragraphColor text-sm'> {blogpost.content} </p>
        </div>
    )
}

export default page

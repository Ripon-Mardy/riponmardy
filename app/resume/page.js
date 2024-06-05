'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const page = () => {
    const textVariants = {
        initial: { opacity: 0.3, y: 30 },
        animate: { opacity: 1, y: 0 }
    }
    return (
        <>
            <div className='relative'>

                <div
                    className='absolute left-1/2 -top-7 md:-top-10 right-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-500 p-0.5 px-2 block w-fit text-sm font-semibold hover:bg-gray-700 duration-200 ease-in-out'>
                    <a href="../../public/images/CVWebDeveloper.pdf" download="CVWebDeveloper.pdf" >Download</a>
                </div>

                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={textVariants}
                    transition={{ duration: 0.5 }}

                    className='px-2 md:px-0 pb-5'>
                    {/* heading  */}
                    <div className='flex items-center flex-col md:flex-row justify-center md:justify-between mt-6'>
                        <div>
                            <h1 className='text-3xl md:text-4xl font-semibold text-headingColor'>
                                Ripon Mardy Axel
                            </h1>
                            <span className='text-center font-semibold text-hoverparagraph text-sm block'>
                                Web Developer | MERN
                            </span>
                        </div>
                        <div className='flex items-center justify-center flex-col mt-4 md:items-end text-sm '>
                            <span>
                                {' '}
                                <b>Phone :</b> +8801320585642{' '}
                            </span>
                            <span className='text-paragraphColor'>
                                {' '}
                                <b className='text-headingColor font-semibold'>Email :</b>{' '}
                                mardyripon10@gmail.com{' '}
                            </span>
                            <span>
                                {' '}
                                <b>Website :</b>{' '}
                                <Link
                                    className='font-semibold hover:underline text-paragraphColor'
                                    href={'https://riponmardy.vercel.app/'}
                                    target='_blank'
                                >
                                    riponmardy.vercel.app
                                </Link>{' '}
                            </span>
                            <Link
                                href={'https://www.linkedin.com/in/ripon-mardy-axel-bb2286249/'}
                                target='_blank'
                                className='text-paragraphColor hover:underline'
                            >
                                Linkedin/riponmardy
                            </Link>
                            <span className='text-paragraphColor'>
                                {' '}
                                <b className='text-headingColor'>Address : </b> Dinajpur,
                                Bangladesh{' '}
                            </span>
                        </div>
                    </div>

                    <hr className='mt-2 inline-block w-full' />

                    {/* === summary === */}
                    <div>
                        <h1 className='bg-headingColor text-black text-lg italic font-semibold w-fit px-4 rounded-sm mt-1'>
                            Summary
                        </h1>
                        <div className='mt-2'>
                            <p className='text-sm md:text-lg text-paragraphColor leading-5'>
                                As a rather professional full-stack web developer, I have full
                                expertise in both front-end and re-give-up technologies. My skills
                                include HTML, CSS, JavaScript, React.Js, Node.Js, Express.Js,
                                MongoDB, and Next.Js. With a strong foundation in building
                                responsive and dynamic .NET packages, I excel at reworking complex
                                requirements into modern, consumer friendly solutions. I am
                                dedicated to writing clean, green code and have a keen eye for
                                detail, ensuring high-quality overall performance and a seamless
                                consumer experience. I am a dynamic development team and eager to
                                contribute my capabilities to advance strong impactful work.{' '}
                            </p>
                        </div>
                    </div>

                    <hr className='mt-2 inline-block w-full' />

                    {/* === tacnical skills ==== */}
                    <div>
                        <h1 className='bg-headingColor text-black text-lg italic font-semibold w-fit px-4 rounded-sm mt-1'>
                            Technical Skills
                        </h1>
                        <div>
                            <h1 className='mt-5 mb-4 text-headingColor font-bold italic'>
                                Front-End Development
                            </h1>
                            <div>
                                <ul className='list-disc flex p-2 gap-4 md:gap-8 items-center justify-between flex-wrap text-paragraphColor font-semibold text-sm'>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li> Tailwind CSS</li>
                                    <li>Bootstrap</li>
                                    <li>JavaScript (ES6+)</li>
                                    <li>React.Js</li>
                                    <li>Next.Js</li>
                                    <li> Framer Motion </li>
                                    <li>GSAP</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h1 className='mt-5 mb-5 text-headingColor font-bold italic'>
                                Back-End Development
                            </h1>
                            <div>
                                <ul className='flex items-start gap-4 flex-col text-sm list-disc'>
                                    <li className='text-paragraphColor'>
                                        <span className='text-headingColor font-bold inline-block text-sm italic mr-3'>
                                            Node.js
                                        </span>
                                        Asynchronous programming, event-driven architecture
                                    </li>
                                    <li className='text-paragraphColor'>
                                        {' '}
                                        <span className='text-headingColor font-bold inline-block text-sm italic mr-3'>
                                            Express.js
                                        </span>{' '}
                                        RESTful API development, middleware integration{' '}
                                    </li>
                                    <li className='text-paragraphColor'>
                                        {' '}
                                        <span className='text-headingColor font-bold inline-block text-sm italic mr-3'>
                                            {' '}
                                            MongoDB
                                        </span>{' '}
                                        NoSQL database design, CRUD operations, Mongoose ORM{' '}
                                    </li>
                                    <li className='text-paragraphColor'>
                                        {' '}
                                        <span className='text-headingColor font-bold inline-block text-sm italic mr-3'>
                                            Next.Js
                                        </span>{' '}
                                        Full Stack Framework{' '}
                                    </li>
                                    <li className='text-paragraphColor'>
                                        {' '}
                                        <span className='text-headingColor font-bold inline-block text-sm italic mr-3'>
                                            JWT (JSON Web Tokens)
                                        </span>{' '}
                                        Authentication and authorization{' '}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className='mt-2 inline-block w-full' />

                    {/* ==== experience ==== */}
                    <div>
                        <h1 className='bg-headingColor text-black text-lg italic font-semibold w-fit px-4 rounded-sm mt-1'>
                            Experience
                        </h1>
                        <div className='mt-6'>
                            <ul className='flex items-start gap-4 flex-col text-sm list-disc'>
                                <li className='text-paragraphColor'>
                                    <span className='text-headingColor font-bold inline-block italic mr-3'>
                                        Developed and maintained
                                    </span>
                                    full-stack web applications using React.js, Node.js, Express.js,
                                    and MongoDB.
                                </li>
                                <li className='text-paragraphColor'>
                                    <span className='text-headingColor font-bold inline-block italic mr-3'>
                                        Implemented server-side rendering and static site generation
                                    </span>
                                    using Next.js to improve SEO and performance.
                                </li>
                                <li className='text-paragraphColor'>
                                    <span className='text-headingColor font-bold inline-block italic mr-3'>
                                        Designed and developed RESTful APIs
                                    </span>
                                    for efficient data exchange between the front-end and back-end
                                    systems.
                                </li>
                                <li className='text-paragraphColor'>
                                    <span className='text-headingColor font-bold inline-block italic mr-3'>
                                        Created dynamic, responsive user interfaces
                                    </span>
                                    with React.js, ensuring cross browser compatibility and a
                                    seamless user experience.
                                </li>
                                <li className='text-paragraphColor'>
                                    <span className='text-headingColor font-bold inline-block italic mr-3'>
                                        Integrated authentication and authorization
                                    </span>
                                    using JSON Web Tokens (JWT) for secure user access and data
                                    protection.
                                </li>

                                <li className='text-paragraphColor'>
                                    <span className='text-headingColor font-bold inline-block italic mr-3'>
                                        Optimized application performance
                                    </span>
                                    through code splitting, lazy loading, and implementing caching
                                    strategies.
                                </li>

                                <li className='text-paragraphColor'>
                                    <span className='text-headingColor font-bold inline-block italic mr-3'>
                                        Utilized version control
                                    </span>
                                    with Git and GitHub for source code management, including
                                    branching, merging, and pull requests.
                                </li>

                                <li className='text-paragraphColor'>
                                    <span className='text-headingColor font-bold inline-block italic mr-3'>
                                        Conducted code reviews
                                    </span>
                                    and provided mentorship to junior developers to ensure code
                                    quality and adherence to best practices.
                                </li>

                                <li className='text-paragraphColor'>
                                    <span className='text-headingColor font-bold inline-block italic mr-3'>
                                        Deployed applications
                                    </span>
                                    to production environments using CI/CD pipelines, ensuring
                                    seamless updates and minimal downtime.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h1 className='md:text-lg text-sm font-bold mt-6'>Ripon Mardy</h1>
                </motion.div>
            </div>
        </>
    )
}

export default page

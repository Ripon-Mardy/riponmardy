import React from 'react'

const Experience = () => {
  return (
    <div className='max-w-6xl mx-auto py-10 p-4 mt-5'>
        <div className='grid grid-cols-1 md:grid-cols-[65%_35%] gap-6'>
            {/* skills  */}
        <div>
            <div>
                <h2 className='text-2xl md:text-3xl font-medium'>Skills_</h2>
            </div>

           <div className='grid grid-cols-2 gap-8 mt-5'>
            {/* FrontEnd  */}
             <div>
                <h2 className='text-xl font-medium'>Frontend *</h2>

                <ul className='space-y-1 mt-2 text-gray-800 text-base' >
                    <li>Next.js, React.js</li>
                    <li>JavaScript (ES6+), TypeScript</li>
                    <li>Tailwind CSS, Bootstrap</li>
                    <li>HTML5, CSS3</li>
                    <li>Responsive Design & UI/UX fundamentals</li>
                    <li>Shadch/ui</li>
                    <li>Redux Toolkit</li>
                </ul>
            </div>
            {/* backend  */}
            <div>
                <h2 className='text-xl font-medium'>Backend *</h2>
                <ul className='space-y-1 mt-2 text-gray-800 text-base'>
                    <li>Node.js, Express.js</li>
                    <li>Authentication (JWT, OAuth)</li>
                    <li>RESTful APIs</li>
                    <li>MVC architecture</li>
                </ul>
            </div>

            {/* database  */}
            <div>
                <h2 className='text-xl font-medium'>Database *</h2>
                <ul className='space-y-1 mt-2 text-gray-800 text-base'>
                    <li>MongoDB, MySQL</li>
                    <li>Query Optimization & Data Modeling</li>
                </ul>
            </div>

              {/* tools  */}
              <div>
                <h2 className='text-xl font-medium'>Tools & Others *</h2>
                <ul className='space-y-1 mt-2 text-gray-800 text-base'>
                    <li>Git & GitHub</li>
                    <li>Docker (basic)</li>
                    <li>CI/CD (basic understanding)</li>
                    <li>Postman</li>
                    <li>Figma (UI collaboration)</li>
                    <li>Nginx & PM2 </li>
                </ul>
              </div>


           </div>
        </div>

        
        {/* experience  */}
        <div className='space-y-8'>
            <h2 className='text-2xl md:text-3xl font-medium'>Experience_</h2>
            <span className='mt-4 inline-block text-lg font-light text-gray-800'>4+ years</span>
            {/* expericence  */}
            <div className='space-y-10'>
                {/* full stack developer  */}
                <div className='space-y-2'>
                    <h2 className='text-xl font-semibold'>Full Stack Developer</h2>
                    <span className='text-gray-700 font-normal block'>Freelance / upwork, fiver , remote</span>
                    <span className='inline-block text-gray-700'>2023 – Present</span>
                </div>
                {/* frontend Developer  */}
                <div className='space-y-2'>
                    <h2 className='text-xl font-semibold'>Frontend Developer</h2>
                    <span className='text-gray-700 font-normal block'>Mathmozo / Remote, Dhaka</span>
                    <span className='inline-block text-gray-700'>2022 – 2023</span>
                </div>
                {/* Junior Web Developer */}
                <div className='space-y-2'>
                    <h2 className='text-xl font-semibold'>Junior Developer</h2>
                    <span className='text-gray-700 font-normal block'>Personal and Academic Projects | </span>
                    <span className='inline-block text-gray-700'>2020 – 2021</span>
                </div>

                
            </div>
        </div>
        </div>

    </div>
  )
}

export default Experience
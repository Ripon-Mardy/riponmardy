import React from 'react'
import Link from 'next/link';
import { Github } from 'lucide-react';

import Copyright from '@/components/Copyright'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <>
    <Navbar/>

    <div className='max-w-6xl mx-auto py-5'>
      <h2 className='text-2xl font-medium'>projects</h2>

      {/* projects card */}
      <div className='mt-5 grid md:grid-cols-2 gap-4'>


        <div className='border border-gray-200 rounded-md p-4 bg-gray-50 space-y-4'>
        <div className='flex items-center justify-between gap-4'>
          <h2 className='text-gray-800 font-semibold text-lg'>devripon</h2>
          <div className='space-x-5'>
            <Link href={'#'} className='text-sm text-gray-800 hover:underline font-medium'>Github</Link>
            <Link href={'#'} className='text-sm text-gray-800 hover:underline font-medium'>Live</Link>
          </div>
        </div>
        <p className='text-gray-800 text-sm'>🎯 Full-Stack Portfolio with Admin Dashboard • Frontend: Next.js 14+ with Tailwind CSS • Backend: API Routes with MongoDB database • Admin Panel: Complete CMS for content management • Features: Dyna…</p>
        <div>
          <span className='text-gray-900 bg-gray-300 text-xs p-1 px-2 rounded-md font-light'>HTML</span>
        </div>
      </div>



      </div>


    </div>

    <Copyright/>
    </>
  )
}

export default page
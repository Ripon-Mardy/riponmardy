import React from 'react'

const Copyright = () => {
    const date = new Date()
  return (
    <div className='max-w-6xl mx-auto mt-10 py-5 text-center'>
        <hr />

        <p className='text-gray-700 text-sm mt-5 font-light '> © {date.getFullYear()}  Ripon — Software Engineer. All rights reserved. </p>

    </div>
  )
}

export default Copyright
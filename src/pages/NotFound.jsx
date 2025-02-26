import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen grid place-items-center px-5'>
      <div className='max-w-2xl bg-[#faf5ef] flex flex-col p-12 md:py-16 items-center gap-5'>
        <h2 className='text-xl md:text-2xl font-bold'>We couldn't find the page you're looking for.</h2>
        <p className='text-center'>Try using the navigation menu at the top or going back to the homepage.</p>
        <Link to="/" className="px-4 md:px-6 py-2.5 md:py-3 bg-primary text-sm md:text-base text-white font-bold hover:bg-dark duration-300 cursor-pointer w-fit">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
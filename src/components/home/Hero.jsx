import React from 'react'
import bg from "../../assets/img_hero.jpg"

const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className='relative h-screen bg-cover bg-center flex items-center justify-center flex-col gap-5 z-0 px-6'>
      
      {/* overlay */}
      <div className='absolute inset-0 bg-black/30 -z-10' />

      <p className='uppercase text-white text-sm sm:text-base font-bold'> Technology People Love</p>
      <h2 className='uppercase text-white font-bold text-xl sm:text-2xl text-center'> Powering KZN with Smart, Reliable, and Affordable Solar Energy.</h2>
      <button className='px-5 py-4 bg-[#646263] text-xs sm:text-sm text-white font-semibold cursor-pointer hover:bg-primary duration-300'>Discover More</button>
    </div>
  )
}

export default Hero
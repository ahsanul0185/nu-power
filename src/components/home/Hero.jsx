import React from 'react'
import bg from "../../assets/img_hero.jpg"
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} style={{ backgroundImage: `url(${bg})` }} className='relative h-screen bg-cover bg-center flex items-center justify-center flex-col gap-5 z-0 px-6'>
      
      {/* overlay */}
      <div className='absolute inset-0 bg-black/30 -z-10' />

      <motion.h3 initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 0.7, delay  :0.5}} className='uppercase text-white text-sm sm:text-base font-bold'> Technology People Love</motion.h3>
      <motion.h2 initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 0.7, delay  :0.5}} className='uppercase text-white font-bold text-xl sm:text-2xl text-center'> Powering KZN with Smart, Reliable, and Affordable Solar Energy.</motion.h2>
    </motion.div>
  )
}

export default Hero
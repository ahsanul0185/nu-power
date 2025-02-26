import React from 'react'
import icon_1 from "../../assets/icons/icon-1.png";
import icon_2 from "../../assets/icons/icon-2.png";
import icon_3 from "../../assets/icons/icon-3.png";
import { IoMdArrowForward } from 'react-icons/io';
import { motion } from 'motion/react';

const Card = ({setShowPopup, id, img, title, delay}) => {
  return (
    <motion.div initial={{y : 50, opacity : 0}} animate={{y : 0, opacity : 1}} transition={{duration : 0.8, ease : "easeOut", delay}} onClick={() => setShowPopup(id)} className='flex w-full shadow-lg flex-col items-center gap-4 bg-slate-100 p-8 cursor-pointer group'>
        <img className='size-16' src={img} alt="" />
          <h2 className='text-xl md:text-2xl font-bold text-center'>{ title }</h2>
        <span className='size-12 bg-darkGray group-hover:bg-primary duration-300 grid place-items-center rounded-full text-white'>
        <IoMdArrowForward className='group-hover:-rotate-45 text-xl duration-200' />
        </span>
      </motion.div>
  )
}

export default Card
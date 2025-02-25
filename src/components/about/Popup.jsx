import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { motion } from 'motion/react'

const Popup = ({setShowPopup, children}) => {
  return (
      <motion.div initial={{opacity : 0}} animate={{opacity : 1}} onClick={() => setShowPopup(false)} className='fixed inset-0 bg-black/40 z-[999] grid place-items-center sm:popup'>
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease : "easeOut"}} onClick={(e) =>  e.stopPropagation() } className='relative w-full md:w-[80%] lg:w-[900px] bg-white h-full sm:h-[95%] rounded-md p-4 overflow-y-auto custom-scrollbar pb-10'>
              <button onClick={() => setShowPopup(false)} className='fixed sm:absolute top-5 right-5 text-2xl cursor-pointer bg-white/70 size-8 grid place-items-center rounded-full' >
                  <IoMdClose />
              </button>
              {children}
          </motion.div>
    </motion.div>
  )
}

export default Popup
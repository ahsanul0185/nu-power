import React from 'react'
import img_solar from "../../assets/solar-sun.jpg";
import { motion } from 'motion/react';

const OurVision = () => {
  return (
    <div className="mt-12 flex flex-col md:flex-row gap-12 items-start">
              <motion.img initial={{x : -100, opacity : 0}} whileInView={{x : 0, opacity : 1}} transition={{duration : 0.8}} viewport={{once : true}} className="w-full md:w-1/2 aspect-4/2 md:aspect-4/3" src={img_solar} alt="" />
              <motion.div initial={{x : 100, opacity : 0}} whileInView={{x : 0, opacity : 1}} transition={{duration : 0.8}} viewport={{once : true}} className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold mb-2">🌍 Our Vision</h2>
                <p className="text-darkGray leading-7">
                To be the <b>leading provider of sustainable energy solutions</b> in Africa, transforming the way businesses and industries <b>generate, store, and consume power</b>. Our vision is to create a future where <b>clean, renewable energy</b> is the standard, ensuring long-term energy security and economic growth for generations to come.     
                </p>
    
                <p className="text-sm text-darkGray my-3"> We envision: :</p>
    
                <ul className="text-darkGray list-disc pl-4 flex flex-col gap-2">
                  <li>
                  A <b>solar-powered Africa</b>, reducing dependence on fossil fuels.
                  </li>
                  <li>
                  <b>Smart, scalable energy solutions</b> for businesses of all sizes.
                  </li>
                  <li>
                  A commitment to <b>technological innovation and continuous improvement.</b>
                  </li>
                  <li>
                  Strong partnerships that drive <b>sustainable development</b> and energy access.
                  </li>
                </ul>
              </motion.div>
            </div>
  )
}

export default OurVision
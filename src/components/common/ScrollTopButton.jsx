import React, { useEffect, useState } from 'react'
import { LiaAngleUpSolid } from 'react-icons/lia'

const ScrollTopButton = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
        
        window.addEventListener("scroll", toggleVisibility);
    
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    

  return (
      <button onClick={scrollToTop} className={`fixed bottom-6 right-6 bg-darkGray/70 hover:bg-primary text-white size-10 md:size-12 grid place-items-center text-xl md:text-2xl cursor-pointer duration-300 ${isVisible ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-10"}`}>
            <LiaAngleUpSolid />      
    </button>
  )
}

export default ScrollTopButton
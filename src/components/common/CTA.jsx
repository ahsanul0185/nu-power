import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-3 flex flex-col sm:flex-row gap-6 items-center justify-around bg-orange absolute top-0 section-padding w-[90%] lg:w-full left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Technology People Love</h2>
      <button className="bg-dark text-white text-sm md:text-base font-semibold px-7 py-3 hover:bg-darkGray duration-300 cursor-pointer">
        <Link to="/contact">Get in Touch</Link>
      </button>
    </div>
  );
};

export default CTA;

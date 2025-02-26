import React from "react";
import logo_white from "../../assets/logo_white.png";
import { Link } from "react-router-dom";
import { FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import CTA from "./CTA";

const Footer = () => {
  return (
    <div className="relative bg-dark pt-40 pb-8 mt-24 md:mt-36 xl:mt-48 px-6">

      <CTA />
      <div className="section-padding">
        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5">
          <div className="lg:mx-auto">
            <Link to="/">
              <img className="w-32" src={logo_white} alt="" />
            </Link>
            <p className="mt-6 text-gray">
              We provide a Wide Range of Quality Solar components including
              panels, inverters , batteries and mounting systems, sourced from
              quality suppliers.
            </p>
          </div>

          {/* Explore */}
          <div className="lg:mx-auto">
            <h3 className="text-white font-bold text-xl mb-4">Explore</h3>
            <ul className="flex flex-col gap-2 font-bold text-gray">
              <Link
                className="hover:text-primary transition-colors duration-300"
                to="/"
              >
                Home
              </Link>
              <Link
                className="hover:text-primary transition-colors duration-300"
                to="/our-services"
              >
                Our Services
              </Link>
              <Link
                className="hover:text-primary transition-colors duration-300"
                to="/projects"
              >
                Recent Projects
              </Link>
              <Link
                className="hover:text-primary transition-colors duration-300"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="hover:text-primary transition-colors duration-300"
                to="/solar-energy-faqs"
              >
                FAQs
              </Link>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:mx-auto">
            <h3 className="text-white font-bold text-xl mb-4">Contact</h3>
            <button className="cursor-pointer text-white text-sm">
              <Link to="/contact" className="flex items-start gap-3 hover:text-primary duration-300"><FaEnvelope className="size-4 text-primary" /> Nu Power Group</Link>
            </button>

            <div className="flex gap-3 mt-3">
              <a href="https://www.facebook.com/progressionstudios/" target="_blank" className="text-xl text-white hover:bg-primary hover:text-black duration-300 size-10 bg-darkGray grid place-items-center rounded-full">
                <FaFacebook />
              </a>
              <a href="https://x.com/progression_s" target="_blank" className="text-xl text-white hover:bg-primary hover:text-black duration-300 size-10 bg-darkGray grid place-items-center rounded-full">
                <FaSquareXTwitter />
              </a>
              <a href="https://www.youtube.com/" target="_blank" className="text-xl text-white hover:bg-primary hover:text-black duration-300 size-10 bg-darkGray grid place-items-center rounded-full">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/envato/" target="_blank" className="text-xl text-white hover:bg-primary hover:text-black duration-300 size-10 bg-darkGray grid place-items-center rounded-full">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray/50 border-t mt-12 mb-8" />
        <p className="text-gray text-sm text-center">&#169; Copyrights are Reserved by Nu Power Group</p>
      </div>
    </div>
  );
};

export default Footer;

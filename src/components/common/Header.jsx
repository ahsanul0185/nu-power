// import React, { useEffect, useState } from "react";
// import logo_white from "../../assets/logo_white.png";
// import logo_dark from "../../assets/logo_black.png";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { FaEnvelope } from "react-icons/fa";
// import { useMotionValueEvent, useScroll } from "motion/react";

// const navItems = [
//   { name: "Home", route: "/" },
//   { name: "About Us", route: "/about" },
//   { name: "Our Services", route: "/our-services" },
//   { name: "Contact", route: "/contact" },
//   { name: "FAQs", route: "/solar-energy-faqs" },
//   { name: "Solar ROI Calculator", route: "/solar-roi-calculator" },
// ];

// const Header = () => {
//   const location = useLocation();
//   const { scrollY } = useScroll();
//   const [isScrolled, setIsScrolled] = useState(false);

//   useMotionValueEvent(scrollY, "change", (current) => {
//     current > 10 ? setIsScrolled(true) : setIsScrolled(false);
//   });


//   return location.pathname === "/" ? (
//     <header
//       className={`fixed left-0 top-0 w-full px-16  z-50 duration-300 ${isScrolled ? "bg-white py-4 border-b border-b-gray/30" : "bg-transparent py-6 border-b-gray/0"}`}
//     >
//       <Link to="/">
//       <img className={`${isScrolled ? "w-32" : "w-40"}`} src={isScrolled ? logo_dark : logo_white} alt="Nu Power Group" /></Link>

//       <nav className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
//         <ul className={`font-semibold flex items-center gap-8  ${isScrolled ? "text-black xl:text-base" : "text-white xl:text-xl"}`}>
//           {navItems.map((item, idx) => (
//             <NavLink
//               key={idx}
//               to={item.route}
//               className="opacity-85 hover:opacity-100 group duration-300"
//             >
//               {item.name}{" "}
//               <span className="block w-0 group-hover:w-full h-0.5 bg-primary duration-200 origin-center mx-auto"></span>
//             </NavLink>
//           ))}
//         </ul>
//       </nav>

//       <div />

//       <button className="absolute top-0 right-8 flex items-center gap-3 px-6 py-4 bg-primary cursor-pointer text-white text-sm hover:bg-darkGray duration-300">
//         {" "}
//         <FaEnvelope className="size-4" /> Get a Quote
//       </button>
//     </header>
//   ) : (
//     <header className={` left-0 top-0 w-full px-10 py-6`}>
//       <div className="flex items-center justify-between">
//         <img className="w-32" src={logo_dark} alt="Nu Power Group" />
//         <button className="flex items-center gap-3 px-5 py-3 bg-primary cursor-pointer text-white text-sm hover:bg-black duration-500">
//           <FaEnvelope className="size-4" /> Get a Quote
//         </button>
//       </div>

//       <nav className="mt-2">
//         <ul className="text-black font-semibold flex items-center gap-8">
//           {navItems.map((item, idx) => (
//             <NavLink
//               key={idx}
//               to={item.route}
//               className="opacity-70 hover:opacity-100 group duration-300"
//             >
//               {item.name}{" "}
//               <span className="block w-0 group-hover:w-full h-0.5 bg-primary duration-200 origin-center mx-auto"></span>
//             </NavLink>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;






import React, { useEffect, useState } from "react";
import logo_white from "../../assets/logo_white.png";
import logo_dark from "../../assets/logo_black.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { useMotionValueEvent, useScroll } from "motion/react";
import { IoMdMenu } from "react-icons/io";

const navItems = [
  { name: "Home", route: "/" },
  { name: "About Us", route: "/about" },
  { name: "Our Services", route: "/our-services" },
  { name: "Contact", route: "/contact" },
  { name: "FAQs", route: "/solar-energy-faqs" },
  { name: "Solar ROI Calculator", route: "/solar-roi-calculator" },
];

const Header = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [transparentHeader, setTransparentHeader] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    current > 10 ? setIsScrolled(true) : setIsScrolled(false);
  });

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/about" || location.pathname === "/our-services"  ) {
      setTransparentHeader(true);
    } else {
      setTransparentHeader(false);
    }
  }, [location.pathname])


  return (
    <header
      className={`fixed left-0 top-0 w-full px-6 sm:px-8 lg:px-16 flex justify-between md:block  z-50 duration-100 ${isScrolled ? "bg-white py-4 border-b border-b-gray/30" :  transparentHeader ? "bg-transparent py-6 border-b-gray/0" : "bg-white py-4 border-b border-b-gray/30"}`}
    >
      <Link to="/">
      <img className={`${isScrolled || transparentHeader ? "w-32" : "w-36 lg:w-40"}`} src={isScrolled || !transparentHeader ? logo_dark : logo_white} alt="Nu Power Group" /></Link>

      <nav className="hidden md:block absolute top-1/2 -translate-y-1/2 left-auto right-8 lg:right-auto lg:left-1/2 lg:-translate-x-1/2">
        <ul className={`font-semibold flex items-center gap-6 xl:gap-8  ${isScrolled ? "text-black xl:text-base" : transparentHeader ? "text-white xl:text-lg" : ""}`}>
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.route}
              className="opacity-85 hover:opacity-100 group duration-200 text-nowrap"
            >
              {item.name}{" "}
              <span className="block w-0 group-hover:w-full h-0.5 bg-primary duration-200 origin-center mx-auto"></span>
            </NavLink>
          ))}
        </ul>
      </nav>

      <button onClick={() => setIsMenuOpen(prev => !prev)} className={`${isScrolled || !transparentHeader ? "text-black" : "text-white"} text-3xl block md:hidden cursor-pointer`}>
        <IoMdMenu />
      </button>

      {/* Mobile Menu */}
      <nav className={`block md:hidden absolute bottom-0 translate-y-full left-0 bg-white w-full mobile-nav overflow-clip duration-200 ${isMenuOpen ? "h-[15.3rem]" : "h-0"}`}>
        <ul className={`font-semibold flex flex-col justify-center items-start xl:gap-8  text-black`}>
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.route}
              onClick={() => setIsMenuOpen(false)}
              className="opacity-85 hover:opacity-100 group duration-300 text-nowrap border-b-gray/40 border-b px-8 w-full py-2 hover:bg-primary"
            >
              {item.name}{" "}
            </NavLink>
          ))}
        </ul>
      </nav>


      <Link to="/contact" className="absolute top-0 right-8 hidden lg:flex items-center gap-3 px-6 py-4 bg-primary cursor-pointer text-white text-sm hover:bg-darkGray duration-300">
        {" "}
        <FaEnvelope className="size-4" /> Get a Quote
      </Link>
    </header>
  );
};

export default Header;


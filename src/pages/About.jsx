import React, { useState } from "react";
import icon_1 from "../assets/icons/icon-1.png";
import icon_2 from "../assets/icons/icon-2.png";
import icon_3 from "../assets/icons/icon-3.png";
import Card from "../components/about/Card";
import Popup from "../components/about/Popup";
import CommercialSolutions from "../components/about/CommercialSolutions";
import SolarSolutions from "../components/about/SolarSolutions";
import RuralElectrification from "../components/about/RuralElectrification";
import img_solar from "../assets/img_hero.jpg";
import img_solar_2 from "../assets/th.jpg";
import img_street from "../assets/street.jpg";
import { motion } from "motion/react";
import bg from "../assets/rooftop.avif"
import PageTitle from "../components/common/PageTitle";

const About = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <PageTitle title="About Nu Power Group" />

<motion.div initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 0.7}} style={{ backgroundImage: `url(${bg})` }} className='relative h-screen bg-cover bg-center flex items-center justify-center flex-col gap-5 z-0 px-6'>
      
      {/* overlay */}
      <div className='absolute inset-0 bg-black/30 -z-10' />

      <motion.h3 initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 0.7, delay : 0.5}} className='text-white text-base sm:text-2xl font-bold'> Turnkey Solar Installation Solutions for Businesses</motion.h3>
      <motion.h2 initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 0.7, delay : 0.5}} className='uppercase text-white font-bold text-xl sm:text-2xl text-center'> KZN's Most Trusted Solar Company</motion.h2>
    </motion.div>

    <div className="section-padding about pb-10">
      <div className="flex flex-col md:flex-row gap-8 -translate-y-[30%]">
        <Card
          setShowPopup={setShowPopup}
          id="card-1"
          title="Commercial Solutions"
          img={icon_1}
          delay={1.2}
        />
        <Card
          setShowPopup={setShowPopup}
          id="card-2"
          title="Home Solar Solutions"
          img={icon_2}
          delay={1.4}
        />
        <Card
          setShowPopup={setShowPopup}
          id="card-3"
          title="Rural Electrification"
          img={icon_3}
          delay={1.6}
        />
      </div>

      {showPopup && (
        <Popup setShowPopup={setShowPopup}>
          {showPopup === "card-1" ? (
            <CommercialSolutions />
          ) : showPopup === "card-2" ? (
            <SolarSolutions />
          ) : showPopup === "card-3" ? (
            <RuralElectrification />
          ) : (
            ""
          )}
        </Popup>
      )}

      <div className="flex flex-col md:flex-row gap-8 mb-5">
      <motion.div initial={{ x : -100,opacity : 0}} whileInView={{ x : 0, opacity : 1}} transition={{duration : 0.8}} viewport={{once : true}} className="order-2 md:order-1">
        <h2 className="text-2xl text-dark font-bold">
          About Nu Power Group - Trusted Solar Experts in Western Cape & KZN
        </h2>
        <p>
          <b>About Nu Power Group</b> - Nu Power Group is a trusted provider of{" "}
          <b>solar energy solutions</b> in{" "}
          <b>Western Cape and KwaZulu-Natal (KZN)</b>. We specialize in
          designing and installing <b>solar power systems</b> that help homes
          and businesses reduce electricity costs and achieve energy
          independence. Our commitment to sustainable energy ensures
          high-quality and cost-effective solar solutions for all our clients
        </p>

        <ul className="mt-6">
          <li>
            ✅ <b>Proven Expertise:</b> Years of experience powering KZN with
            cutting-edge solar technology.
          </li>
          <li>
            ✅ <b>Quality & Reliability:</b> Premium solar panels, inverters,
            and batteries built for durability.
          </li>
          <li>
            ✅ <b>Seamless Turnkey Solutions:</b> From consultation to
            installation and maintenance.
          </li>
          <li>
            ✅ <b>Cost Savings & Sustainability:</b> Reduce energy bills and
            achieve energy independence.
          </li>
          <li>
            ✅ <b>Customer-First Approach:</b> Dedicated support and tailored
            solutions to meet your needs.
          </li>
        </ul>
        <br />
        <p>
          <b>
            Join the growing number of businesses and homeowners in KZN
            switching to sustainable energy with Nu Power Group.
          </b>
        </p>
        <br />
        <p>
          At <b>Nu Power Group</b>, we are passionate about sustainable energy
          solutions. We stay up-to-date with industry trends through{" "}
          <a
            className="text-primary hover:text-dark duration-300"
            href="https://www.solarpowerworldonline.com/"
          >
            Solar Power World
          </a>{" "}
          to ensure we provide the best solutions to our customers
        </p>
        <br />
        <p>
          💡{" "}
          <span className="italic">
            Powering the Future. Sustaining Your Success.
          </span>
        </p>
        </motion.div>
        
        <motion.div initial={{ x : 100,opacity : 0}} whileInView={{ x : 0, opacity : 1}} transition={{duration : 0.8}} viewport={{once : true}} className="flex flex-col md:w-1/2 shrink-0 gap-8 order-1 md:order-2">
          <img className="aspect-video" src={ img_solar_2} alt="Solar Power World" />
          <img className="aspect-video" src={ img_street} alt="Solar Power World" />
        </motion.div>
      </div>

     
        <div className="flex flex-col md:flex-row gap-8 mt-16">
          <motion.img initial={{ x : -100,opacity : 0}} whileInView={{ x : 0, opacity : 1}} transition={{duration : 0.8}} viewport={{once : true}} className="md:w-1/2 aspect-video md:aspect-auto" src={img_solar} alt="Nu Power Group" />
          <motion.div initial={{ x : 100,opacity : 0}} whileInView={{ x : 0, opacity : 1}} transition={{duration : 0.8}} viewport={{once : true}}>
            <h2 className="text-xl md:text-2xl text-dark font-bold mb-5">
              🌍 Comprehensive Solar Solutions
            </h2>
            <ul className="flex flex-col gap-3">
              <li>
                ✅ <b>Commercial Solar -</b> High-performance solar energy
                systems designed to reduce operating costs, enhance energy
                independence, and maximize sustainability for businesses,
                factories, and industrial facilities.
              </li>
              <li>
                ✅ <b>Domestic Solar -</b> Smart, efficient, and affordable
                solar power for homes, ensuring reliable electricity, lower
                energy bills, and backup during power outages.
              </li>
              <li>
                ✅ <b>Rural Electrification -</b> Bringing clean energy to
                off-grid communities and remote locations, providing sustainable
                power where it's needed most.
              </li>
              <li>
                ✅ <b>Expert Elevator Backup Systems -</b> Ensuring
                uninterrupted operation of elevators and critical infrastructure
                with <b>high-efficiency solar-powered backup solutions</b> for
                commercial and residential buildings.
              </li>
            </ul>

            <h2 className="text-darkGray font-bold mt-10 mb-5">
              💡 Innovation & Expertise
            </h2>
            <p>
              With years of experience, a highly skilled team, and a passion for
              renewable energy, we offer:
            </p>
            <ul>
              <li>
                ✔ Turnkey solar solutions, from design to installation and
                maintenance
              </li>
              <li>✔ Scalable energy systems tailored to client needs</li>
              <li>
                ✔ Custom backup power solutions for elevators, essential
                equipment, and critical operations
              </li>
              <li>
                ✔ Sustainable energy strategies that drive efficiency and cost
                savings
              </li>
            </ul>
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default About;

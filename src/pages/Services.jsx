import React from "react";
import { LuDot } from "react-icons/lu";
import img_power_solutions from "../assets/electrician-1.jpg";
import img_commercial_solutions from "../assets/electrician-2.jpg";
import img_battery from "../assets/img_battery.jpg";
import img_rural from "../assets/street.jpg";
import img_solar from "../assets/solar-roof.jpg";
import { motion } from "motion/react";

const Services = () => {
  return (
    <div className="mt-32 section-padding pb-10 md:pb-0">
      <motion.div initial={{y : -30, opacity : 0}} animate={{y: 0, opacity: 1}} transition={{duration : 0.8}} className="flex flex-col items-center text-dark my-20">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-center">
          Welcome to the world of solar energy
        </h1>
        <h2 className="flex items-center gap-1 sm:text-xl md:text-2xl font-semibold mt-3 flex-wrap justify-center">
          Sustainable <LuDot /> Efficient <LuDot /> Powerful <LuDot /> Reliable
        </h2>
      </motion.div>

      <h2 className="text-xl md:text-2xl font-bold text-dark mb-3">
        Why Choose Solar Energy Services | Nu Power Group?
      </h2>
      <p>
        Welcome to Nu Power Group, your trusted provider of Solar Energy
        Services. We offer expert solar solutions, including installation,
        maintenance, and energy management, ensuring reliable and sustainable
        power for homes and businesses.
      </p>
      <br />

      <p>
        At Nu Power Group, we provide expert
        <b>Solar Energy Services | Nu Power Group</b> to homes and businesses,
        ensuring reliable and cost-effective power solutions. We specialize in
        providing
        <b>
          high-performance, reliable, and cost-effective renewable energy
          solutions
        </b>
        for residential, commercial, and industrial applications. Our services
        are designed to help businesses and homeowners achieve
        <b>energy independence, sustainability, and cost savings</b> through
        cutting-edge solar and battery backup systems.
      </p>

      <div className="my-14 flex flex-col gap-12 md:gap-20">
        {/*  Solar Power Solutions */}
        <div className="flex flex-col md:flex-row gap-8">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{duration : 0.8}}
            viewport={{once : true}}
            className="md:w-1/2 aspect-video md:aspect-4/3 object-cover object-top"
            src={img_power_solutions}
            alt="Solar Power Solutions"
          />
          <motion.div initial={{x : 100, opacity : 0}} whileInView={{x : 0, opacity : 1}} transition={{duration : 0.8}} viewport={{once : true}}>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              ☀️ Solar Power Solutions
            </h2>
            <ul className="list-disc pl-5 flex flex-col gap-3">
              <li>
                <b>Residential Solar Systems </b> - Custom-designed solar
                installations for homes to reduce electricity bills and provide
                backup during outages.
              </li>
              <li>
                <b>Commercial & Industrial Solar </b> - Large-scale solar
                solutions for businesses, factories, and industrial facilities
                to cut operational costs and enhance energy efficiency.
              </li>
              <li>
                <b>Off-Grid Solar Systems </b> - Independent solar power
                solutions for remote areas with <b>no grid access</b>.
              </li>
              <li>
                <b>Hybrid Solar Systems </b> - Grid-tied solar with battery
                backup for <b>uninterrupted power supply</b>.
              </li>
            </ul>
          </motion.div>
        </div>

        {/*  Battery Backup */}
        <div className="flex flex-col md:flex-row gap-8">
        <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{duration : 0.8}}
            viewport={{once : true}}
            className="md:w-1/2 aspect-video md:aspect-4/3 object-cover md:order-2"
            src={img_battery}
            alt="Solar Power Solutions"
          />
          <motion.div initial={{x : -100, opacity : 0}} whileInView={{x : 0, opacity : 1}} transition={{duration : 0.8}} viewport={{once : true}}>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              🔋 Battery Backup
            </h2>
            <ul className="list-disc pl-5 flex flex-col gap-3">
              <li>
                <b>Battery Backup for Homes & Businesses</b> - Ensuring reliable
                power during <b>load shedding and outages</b>.
              </li>
              <li>
                <b>Lithium-Ion & Lead-Acid Battery Solutions</b> -
                High-performance energy storage for maximum efficiency.
              </li>
              <li>
                <b>Custom Energy Storage Systems</b> - Designed to{" "}
                <b>match your energy usage and backup needs</b>.
              </li>
              <li>
                <b>Battery Integration with Existing Solar Systems</b> - Upgrade
                your current system with a <b>smart battery solution</b>.
              </li>
            </ul>
          </motion.div>
        </div>

        {/*  Commercial Solutions*/}
        <div className="flex flex-col md:flex-row gap-8">
        <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{duration : 0.8}}
            viewport={{once : true}}
            className="md:w-1/2 aspect-video md:aspect-4/3 object-cover"
            src={img_commercial_solutions}
            alt="Solar Power Solutions"
          />
          <motion.div initial={{x : 100, opacity : 0}} whileInView={{x : 0, opacity : 1}} transition={{duration : 0.8}} viewport={{once : true}}>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              🏢 Commercial Solutions
            </h2>
            <ul className="list-disc pl-5 flex flex-col gap-3">
              <li>
                <b>Microgrid & Mini-Grid Development</b> - Independent power
                systems for businesses, rural areas, and industrial facilities.
              </li>
              <li>
                <b>Energy Audits & Optimization</b> - Helping businesses{" "}
                <b>analyze and reduce</b> energy consumption.
              </li>
              <li>
                <b>Solar Financing & Power Purchase Agreements (PPA)</b> -
                Affordable payment plans for businesses.
              </li>
              <li>
                <b>Solar System Monitoring & Maintenance</b> - Ongoing
                performance tracking and technical support.
              </li>
            </ul>
          </motion.div>
        </div>

        {/*  Elevator Backup */}
        <div className="flex flex-col md:flex-row gap-8">
        <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{duration : 0.8}}
            viewport={{once : true}}
            className="md:w-1/2 aspect-video md:aspect-4/3 object-cover md:order-2"
            src={img_battery}
            alt="Solar Power Solutions"
          />
          <motion.div initial={{x : -100, opacity : 0}} whileInView={{x : 0, opacity : 1}} transition={{duration : 0.8}} viewport={{once : true}}>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              🛗 Elevator Backup
            </h2>
            <ul className="list-disc pl-5 flex flex-col gap-3">
              <li>
                <b>Uninterrupted Power for Elevators</b> - Battery backup
                systems to <b>keep elevators operational</b> during power
                failures.
              </li>
              <li>
                <b>Power Solutions for Critical Infrastructure</b> - Backup
                energy for hospitals, data centers, and essential services.
              </li>
              <li>
                <b>Smart Load Management</b> - Optimized energy distribution to
                <b>extend backup duration</b>.
              </li>
            </ul>
          </motion.div>
        </div>

        {/*  Rural Electrification */}
        <div className="flex flex-col md:flex-row gap-8">
        <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{duration : 0.8}}
            viewport={{once : true}}
            className="md:w-1/2 aspect-video md:aspect-4/3 object-cover"
            src={img_rural}
            alt="Solar Power Solutions"
          />
          <motion.div initial={{x : 100, opacity : 0}} whileInView={{x : 0, opacity : 1}} transition={{duration : 0.8}} viewport={{once : true}}>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              🌍 Rural Electrification
            </h2>
            <ul className="list-disc pl-5 flex flex-col gap-3">
              <li>
                <b>Off-Grid Power for Remote Communities</b> - Bringing
                electricity to areas without grid access.
              </li>
              <li>
                <b>Solar-Powered Water Pumps & Irrigation</b> - Supporting
                <b>agriculture and water supply projects</b>.
              </li>
              <li>
                <b>School & Community Solar Projects</b> - Sustainable energy
                solutions for <b>education, healthcare, and businesses</b> in
                rural areas.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Solar EPC Services */}
        <div className="flex flex-col md:flex-row gap-8">
        <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{duration : 0.8}}
            viewport={{once : true}}
            className="md:w-1/2 aspect-video md:aspect-4/3 object-cover md:order-2"
            src={img_solar}
            alt="Solar Power Solutions"
          />
          <motion.div initial={{x : -100, opacity : 0}} whileInView={{x : 0, opacity : 1}} transition={{duration : 0.8}} viewport={{once : true}}>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              📡 Solar EPC Services
            </h2>
            <ul className="list-disc pl-5 flex flex-col gap-3">
              <li>
                <b>Turnkey Solar Installations</b> - From design and engineering
                to procurement and installation.
              </li>
              <li>
                <b>Feasibility Studies & Site Assessments</b> - Ensuring the
                best system design for your location.
              </li>
              <li>
                <b>Compliance & Certification</b> - Full support for <b>regulatory
                approvals and system compliance</b>.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity : 0}} whileInView={{ opacity : 1}} transition={{duration : 0.8}} viewport={{once : true}}>
      <h2 className="text-xl md:text-2xl font-bold text-dark">💡 Let's Power Your Future Together!</h2>
      <p>At <b>Nu Power Group</b>, we deliver <b>custom energy solutions</b> designed for efficiency, reliability, and sustainability.</p>
      <br />
      <h2 className="text-xl md:text-2xl font-bold text-dark">📞 Contact us today to discuss how we can help you transition to clean, cost-effective energy!</h2>
      </motion.div>
    </div>
  );
};

export default Services;

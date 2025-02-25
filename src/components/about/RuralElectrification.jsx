import React from "react";
import solar from "../../assets/street.jpg";

const RuralElectrification = () => {
  return (
    <div>
      <img className="w-full aspect-4/3 sm:aspect-video" src={solar} alt="" />
      <h2 className="sm:text-xl md:text-2xl font-bold mt-6 mb-2 text-dark">
        Empowering Communities with Rural Electrification
      </h2>

      <p className="text-darkGray text-sm sm:text-base">
        At <b>Nu Power Group</b>, we are committed to{" "}
        <b>bridging the energy gap</b> by bringing{" "}
        <b>sustainable, reliable, and affordable electricity</b> to{" "}
        <b>rural and off-grid communities</b>. Millions of people across Africa
        still lack access to stable electricity, limiting their opportunities
        for <b>education, healthcare, and economic growth</b>. Our{" "}
        <b>solar-powered rural electrification solutions</b> provide a clean,
        long-lasting alternative to unreliable grids and costly fossil fuels.
      </p>

      <h2 className="sm:text-xl font-bold mt-6 mb-2 text-dark">
        Why Rural Electrification Matters
      </h2>
      <ul className="text-darkGray text-sm sm:text-base">
        <li>
          ⚡<b> Improves Quality of Life </b> - Access to electricity enhances
          education, healthcare, and economic opportunities.
        </li>
        <li>
          ⚡<b> Supports Agriculture & Small Businesses </b> - Enables
          irrigation systems, cold storage, and small-scale industries to
          thrive.
        </li>
        <li>
          ⚡<b> Reduces Dependence on Fossil Fuels </b> - Eliminates reliance on
          kerosene, diesel generators, and inefficient power sources.
        </li>
        <li>
          ⚡<b> Creates Sustainable Development </b> - Drives job creation,
          innovation, and local enterprise growth.
        </li>
      </ul>

      <h2 className="sm:text-xl font-bold mt-6 mb-2 text-dark">
        Our Rural Electrification Solutions
      </h2>
      <ul className="text-darkGray text-sm sm:text-base">
        <li>
          ✅ <b> Off-Grid Solar Power Systems </b> - Fully independent systems
          providing electricity where grid access is unavailable.
        </li>
        <li>
          ✅ <b> Microgrids & Community Solar </b> - Shared solar solutions
          powering entire villages, schools, and businesses.
        </li>
        <li>
          ✅ <b> Solar-Powered Water Pumps & Irrigation </b> - Supporting
          agriculture, livestock, and clean water access.
        </li>
        <li>
          ✅ <b> Battery Storage & Hybrid Systems </b> - Ensuring consistent
          power supply, even at night or during low sunlight conditions.
        </li>
        <li>
          ✅ <b> Affordable, Scalable, and Fast Deployment </b> - One-day
          installation for homes, businesses, and community projects.
        </li>
      </ul>

      <h2 className="sm:text-xl font-bold mt-6 mb-2 text-dark">
        How We Deliver Rural Electrification
      </h2>
      <ul className="text-darkGray text-sm sm:text-base">
        <li>
          🌞<b> Assessing Community Needs </b> - We work with local leaders to
          understand <b>energy demands and infrastructure gaps</b>.
        </li>
        <li>
          🌞<b> Customizing the Right Solar Solution </b> - Every project is
          designed to <b>meet the specific power needs of the community</b>.
        </li>
        <li>
          🌞<b> Fast & Efficient Installation </b> - Our expert team ensures a{" "}
          <b>seamless transition to solar power</b>.
        </li>
        <li>
          🌞<b> Long-Term Support & Maintenance </b> - We provide{" "}
          <b>ongoing service, monitoring, and training</b> to sustain power
          reliability.
        </li>
      </ul>

      <h2 className="sm:text-xl font-bold mt-6 mb-2 text-dark">
        Lighting the Future, One Community at a Time
      </h2>
      <p className="text-darkGray text-sm sm:text-base">
        By investing in rural electrification, <b>Nu Power Group</b> is helping
        to{" "}
        <b>
          transform lives, uplift economies, and drive sustainable development
          across Africa
        </b>
        . We believe that{" "}
        <b>access to electricity is a right, not a privilege</b>, and we are
        dedicated to making clean energy accessible to all.
      </p>
      <br />
      <p className="text-darkGray text-sm sm:text-base">
        💡{" "}
        <b>
          Join us in powering rural communities with the energy of the future.
          Contact us today to learn more!
        </b>
      </p>
    </div>
  );
};

export default RuralElectrification;

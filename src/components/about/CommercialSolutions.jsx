import React from "react";
import solar from "../../assets/th.jpg";

const CommercialSolutions = () => {
  return (
    <div>
     <img className="w-full aspect-4/3 sm:aspect-video" src={solar} alt="" />
      <h2 className="sm:text-xl md:text-2xl font-bold mt-6 mb-2 text-dark">
        Nu Power Group - Leading Commercial Solar Solutions
      </h2>

      <p className="text-darkGray text-sm sm:text-base">
        At <b>Nu Power Group</b>, we specialize in delivering{" "}
        <b>high-performance commercial solar solutions</b> that help businesses{" "}
        <b>
          reduce energy costs, enhance sustainability, and ensure long-term
          power security.
        </b>{" "}
        Our <b>turnkey solar systems</b> are designed to meet the unique energy
        demands of commercial and industrial operations, providing{" "}
        <b>cost-effective, reliable, and scalable</b> renewable energy
        solutions.
      </p>

      <h2 className="sm:text-xl font-bold mt-6 mb-2 text-dark">
        Why Choose Nu Power Group for Commercial Solar?
      </h2>
      <ul className="text-darkGray text-sm sm:text-base">
        <li>
          ✅ <b>Lower Operating Costs </b> - Cut electricity expenses with solar
          energy while maximizing ROI.
        </li>
        <li>
          ✅<b> Energy Independence </b> - Reduce reliance on the grid and
          protect your business from rising energy costs.
        </li>
        <li>
          ✅ <b>Custom Engineered Solutions </b> - Tailored solar power systems
          designed to fit your business’s unique energy requirements.
        </li>
        <li>
          ✅ <b>Advanced Energy Storage </b> - Backup power and peak demand
          management with battery storage solutions.
        </li>
        <li>
          ✅ <b>Seamless Integration </b> - We handle everything from system
          design and engineering to installation and maintenance.
        </li>
        <li>
          ✅ <b>Sustainability & Compliance </b> - Help your company meet green
          energy goals and benefit from tax incentives.
        </li>
      </ul>

      <h2 className="sm:text-xl font-bold mt-6 mb-2 text-dark">Industries We Serve</h2>
      <ul className="text-darkGray text-sm sm:text-base">
        <li>
          ✅<b>Manufacturing & Industrial Facilities </b> - Power-intensive
          operations optimized with solar energy.
        </li>
        <li>
          ✅<b>Retail & Commercial Buildings </b> - Lower overhead costs while
          promoting sustainability.
        </li>
        <li>
          ✅<b> Agricultural & Farming Operations </b> - Reliable solar
          solutions for irrigation, cold storage, and processing.
        </li>
        <li>
          ✅<b> Hotels & Hospitality </b> - Reduce energy expenses while
          improving eco-friendly branding.
        </li>
        <li>
          ✅<b> Healthcare & Educational Institutions </b> - Ensuring stable,
          clean energy for critical operations.
        </li>
      </ul>

      <h2 className="sm:text-xl font-bold mt-6 mb-2 text-dark">Turnkey Commercial Solar Solutions</h2>
      <p className="text-darkGray text-sm sm:text-base">
        From <b>initial consultation and system design</b> to <b>installation, monitoring, and maintenance,</b> Nu Power Group offers a <b>complete end-to-end solar solution</b> for businesses looking to harness the power of the sun.
      </p>
      <br />
      <p className="text-darkGray text-sm sm:text-base"><b>Power your business with reliable, cost-effective, and sustainable energy.</b> Contact us today to discuss how <b>Nu Power Group</b> can transform your commercial energy strategy.</p>
    </div>
  );
};

export default CommercialSolutions;

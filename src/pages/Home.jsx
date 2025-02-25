import React from "react";
import Hero from "../components/home/Hero";
import Title from "../components/home/Title";
import OurMission from "../components/home/OurMission";
import OurVision from "../components/home/OurVision";
import img_1 from "../assets/person-solar-roof.jpg";
import img_2 from "../assets/solar-roof.jpg";

const Home = () => {
  return (
    <div>
      <Hero />

      <div className="section-padding py-12">
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-3.5">
            Solar Power Experts in KZN & Western Cape - Trusted Energy Solutions
          </h2>
          <p className="text-darkGray">
            <b>Nu Power Group - Solar Power Experts in KZN & Western Cape</b>.
            We specialize in designing and installing{" "}
            <b>solar energy solutions</b> tailored to residential, commercial,
            and industrial clients across{" "}
            <b>KwaZulu-Natal and the Western Cape</b>. Our mission is to help
            you achieve energy independence with cutting-edge{" "}
            <b>solar power systems</b>, ensuring reliability and cost savings.
            Whether you need <b>solar panels</b>, <b>inverters</b>, or{" "}
            <b>battery storage solutions</b>, our expert team is ready to
            provide the best sustainable energy options.
          </p>
        </div>

        <Title title="Nu Power Group | Solar Power Experts in KZN & Western Cape" />

        <OurMission />
        <OurVision />
        <br />
        <br />
        <br />
        <br />
        <Title title="Get to know us" />

        <div className="flex gap-12 mt-6">
          <div>
            <h2 className="text-xl md:text-2xl mb-3 font-bold">
              <a href="https://www.sunsynk.org/" target="_blank">
                Affordable Solar Energy Solutions in KwaZulu-Natal & Western
                Cape
              </a>
            </h2>
            <p className="text-darkGray">
              At Nu Power Group, we are committed to transforming Africa’s
              energy landscape with cutting-edge renewable energy solutions.
              Whether you are looking for reliable solar power for your home,
              business, or community, we provide sustainable and cost-effective
              energy solutions tailored to your needs.
            </p>

            <img
              src={img_1}
              className="block md:hidden aspect-video object-cover mt-5"
              alt="Affordable Solar Energy Solutions"
            />

            <h2 className="text-xl md:text-2xl mt-8 mb-3 font-bold">
              Off-Grid and Hybrid Solar Systems for Businesses
            </h2>
            <ul className="text-darkGray list-disc pl-4 flex flex-col gap-2">
              <li>
                <b>Solar Power Systems</b> - Efficient and scalable solar
                solutions for residential, commercial, and industrial
                applications.
              </li>
              <li>
                <b>Mini-Grids & Rural Electrification</b> - Bringing sustainable
                power to remote and underserved communities.
              </li>
              <li>
                <b>Energy Consulting & EPC Services</b> - End-to-end
                engineering, procurement, and construction for renewable energy
                projects.
              </li>
              <li>
                <b>Renewable Infrastructure Development</b> - Large-scale solar
                farms and power distribution systems.
              </li>
            </ul>

            <img
              src={img_2}
              className="block md:hidden aspect-video object-cover mt-5"
              alt="Off-Grid and Hybrid Solar Systems"
            />

            <h3 className="mt-8 font-semibold">
              Why Choose Nu Power Group for Solar Power in KZN & Western Cape?
            </h3>
            <p className="text-darkGray text-sm">
              Nu Power Group offers expert solar energy solutions in
              KwaZulu-Natal and the Western Cape, helping businesses and
              homeowners achieve energy independence with off-grid solar systems
              and hybrid solar power installations. Proven Expertise in
              Renewable Energy Customized Solutions for Maximum Efficiency
              Commitment to Quality & Sustainability Reliable Power, Lower
              Costs, Greener Future
            </p>
          </div>

          <div className="hidden md:flex w-1/2 shrink-0 flex-col gap-5">
            <img
              src={img_1}
              className="aspect-video object-cover"
              alt="Affordable Solar Energy Solutions"
            />
            <img
              src={img_2}
              className="aspect-video object-cover"
              alt="Off-Grid and Hybrid Solar Systems"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

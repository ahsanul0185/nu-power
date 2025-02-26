import React, { useState } from "react";
import { faqs } from "../faqs";
import { TfiAngleDown } from "react-icons/tfi";
import { motion } from "motion/react";
import img_general from "../assets/home.jpg"
import img_domestic from "../assets/img_hero.jpg"
import img_commercial from "../assets/rooftop.avif"
import img_battery from "../assets/img_battery_2.jpg"
import img_elevator from "../assets/controller.png"

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState({
    general: null,
    domestic: null,
    commercial: null,
    battery: null,
    elevator: null,
    warranty: null,
  });

  const toggleActiveIndex = (category, index) => {
    setActiveIndex((prev) =>
      Object.keys(prev).reduce((acc, key) => {
        acc[key] =
          key === category ? (prev[key] === index ? null : index) : null;
        return acc;
      }, {})
    );
  };

  return (
    <div className="mt-28 section-padding about pb-10">
      <h1 className="font-bold text-dark text-xl sm:text-2xl md:text-3xl">
        FAQs - Commercial & Domestic Solar and Battery Backup Solutions
      </h1>
      <p className="text-sm sm:text-base mt-2">
        Solar Energy FAQs - Your Guide to Common Questions.
      </p>
      <br />
      <p className="text-sm sm:text-base">
        Solar energy is one of the most efficient and sustainable power sources
        today. In this Solar Energy FAQs guide, we answer the most frequently
        asked questions about solar panels, installation, and energy savings.
        Whether you're a homeowner or a business owner, you'll find useful
        insights to help you make informed decisions
      </p>

      <div className="mt-10 md:mt-20 flex flex-col gap-10">
        {/* General */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-dark">
            ☀️ General Solar FAQs
          </h2>
          <img className=" mt-3 w-full aspect-4/2 object-cover object-center" src={ img_general} alt="General Solar FAQs" />
          {faqs.general.map((faq, index) => (
            <div
              key={index}
              className="border border-gray my-3 md:my-5  rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleActiveIndex("general", index)}
                className="w-full px-5 md:px-8 flex items-start gap-4 md:gap-5 md:text-xl cursor-pointer py-3 md:py-4"
              >
                <TfiAngleDown
                  className={`shrink-0 mt-2 md:mt-1 duration-300 ${
                    activeIndex.general === index ? "-rotate-180" : "rotate-0"
                  }`}
                />{" "}
                <span className="text-left">{faq.question}</span>
              </button>

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: activeIndex.general === index ? "auto" : 0 }}
                className=""
              >
                <p className="px-5 md:pl-[4.5rem] pb-4 text-sm md:text-[1.1rem]">
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Domestic */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-dark">
            🏠 Domestic Solar FAQs
          </h2>
          <img className=" mt-3 w-full aspect-4/2 object-cover object-center" src={ img_domestic} alt="General Solar FAQs" />
          {faqs.domestic.map((faq, index) => (
            <div
              key={index}
              className="border border-gray my-3 md:my-5  rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleActiveIndex("domestic", index)}
                className="w-full px-5 md:px-8 flex items-start gap-4 md:gap-5 md:text-xl cursor-pointer py-3 md:py-4"
              >
                <TfiAngleDown
                  className={`shrink-0 mt-2 md:mt-1 duration-300 ${
                    activeIndex.domestic === index ? "-rotate-180" : "rotate-0"
                  }`}
                />{" "}
                <span className="text-left">{faq.question}</span>
              </button>

              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: activeIndex.domestic === index ? "auto" : 0,
                }}
                className=""
              >
                <p className="px-5 md:pl-[4.5rem] pb-4 text-sm md:text-[1.1rem]">
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Commercial */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-dark">
            🏢 Commercial Solar FAQs
          </h2>
          <img className=" mt-3 w-full aspect-4/2 object-cover object-center" src={ img_commercial} alt="General Solar FAQs" />
          {faqs.commercial.map((faq, index) => (
            <div
              key={index}
              className="border border-gray my-3 md:my-5  rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleActiveIndex("commercial", index)}
                className="w-full px-5 md:px-8 flex items-start gap-4 md:gap-5 md:text-xl cursor-pointer py-3 md:py-4"
              >
                <TfiAngleDown
                  className={`shrink-0 mt-2 md:mt-1 duration-300 ${
                    activeIndex.commercial === index
                      ? "-rotate-180"
                      : "rotate-0"
                  }`}
                />{" "}
                <span className="text-left">{faq.question}</span>
              </button>

              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: activeIndex.commercial === index ? "auto" : 0,
                }}
                className=""
              >
                <div className="px-5 md:pl-[4.5rem] pb-4 text-sm md:text-[1.1rem]">
                  <p>{faq.answer}</p>
                  <ul className="list-disc pl-5 mt-1 font-semibold">
                    {faq.list?.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Battery */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-dark">
            🔋 Battery Backup FAQs
          </h2>
          <img className=" mt-3 w-full aspect-4/2 object-cover object-center" src={ img_battery} alt="General Solar FAQs" />
          {faqs.battery.map((faq, index) => (
            <div
              key={index}
              className="border border-gray my-3 md:my-5  rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleActiveIndex("battery", index)}
                className="w-full px-5 md:px-8 flex items-start gap-4 md:gap-5 md:text-xl cursor-pointer py-3 md:py-4"
              >
                <TfiAngleDown
                  className={`shrink-0 mt-2 md:mt-1 duration-300 ${
                    activeIndex.battery === index ? "-rotate-180" : "rotate-0"
                  }`}
                />{" "}
                <span className="text-left">{faq.question}</span>
              </button>

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: activeIndex.battery === index ? "auto" : 0 }}
              >
                <div className="px-5 md:pl-[4.5rem] pb-4 text-sm md:text-[1.1rem]">
                  <div>
                    {faq.answer !== "battery-type" ? (
                      faq.answer
                    ) : (
                      <BatteryTypeList />
                    )}
                  </div>
                  <ul className="list-disc pl-5 mt-1 font-semibold">
                    {faq.list?.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Elevator  */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-dark">
            🛗 Elevator Backup & Solar Power FAQs
          </h2>
          <img className=" mt-3 w-full aspect-4/2 object-cover object-center" src={ img_elevator} alt="General Solar FAQs" />
          {faqs.elevator.map((faq, index) => (
            <div
              key={index}
              className="border border-gray my-3 md:my-5  rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleActiveIndex("elevator", index)}
                className="w-full px-5 md:px-8 flex items-start gap-4 md:gap-5 md:text-xl cursor-pointer py-3 md:py-4"
              >
                <TfiAngleDown
                  className={`shrink-0 mt-2 md:mt-1 duration-300 ${
                    activeIndex.elevator === index ? "-rotate-180" : "rotate-0"
                  }`}
                />{" "}
                <span className="text-left">{faq.question}</span>
              </button>

              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: activeIndex.elevator === index ? "auto" : 0,
                }}
                className=""
              >
                <div className="px-5 md:pl-[4.5rem] pb-4 text-sm md:text-[1.1rem]">
                  <p>{faq.answer}</p>
                  <ul className="list-disc pl-5 mt-1 font-semibold">
                    {faq.list?.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Warranty */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-dark">
            📜 Warranty & Support FAQs
          </h2>
          {faqs.warranty.map((faq, index) => (
            <div
              key={index}
              className="border border-gray my-3 md:my-5  rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleActiveIndex("warranty", index)}
                className="w-full px-5 md:px-8 flex items-start gap-4 md:gap-5 md:text-xl cursor-pointer py-3 md:py-4"
              >
                <TfiAngleDown
                  className={`shrink-0 mt-2 md:mt-1 duration-300 ${
                    activeIndex.warranty === index ? "-rotate-180" : "rotate-0"
                  }`}
                />{" "}
                <span className="text-left">{faq.question}</span>
              </button>

              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: activeIndex.warranty === index ? "auto" : 0,
                }}
                className=""
              >
                <div className="px-5 md:pl-[4.5rem] pb-4 text-sm md:text-[1.1rem]">
                  <p>{faq.answer}</p>
                  <ul className="list-disc pl-5 mt-1 font-semibold">
                    {faq.list?.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;

const BatteryTypeList = () => {
  return (
    <div>
      <ul>
        <li>
          ✔
          <a
            href="https://www.sunsynk.org/batterystoragesolutions"
            className="font-bold text-primary hover:text-dark duration-300"
          >
            {" "}
            Sunsynk Lithium-ion (LiFePO4)
          </a>{" "}
          - Longer lifespan, efficient, lightweight
        </li>
        <li>
          ✔
          <a
            href="https://en.pylontech.com.cn/"
            className="font-bold text-primary hover:text-dark duration-300"
          >
            {" "}
            Pylontech Lithium-ion(LiFePO4)
          </a>{" "}
          - Affordable but shorter lifespan
        </li>
      </ul>
      <p>
        Lithium-ion batteries are <b>recommended</b> for their durability and
        efficiency.
      </p>
    </div>
  );
};

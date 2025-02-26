import React, { useState } from 'react'
import { TfiAngleDown } from 'react-icons/tfi'
import { motion } from 'motion/react'

const contactFaqs = [
  {
    question: "How soon will I get a response?",
    answer : "Typically respond within 24 hours during business hours"
  },
  {
    question: "Can I request a site inspection?",
    answer : "Yes, we offer free consultations and can schedule a site visit."
  },
  {
    question: "Where can I learn more about solar energy?",
    answer : "Learn more about the latest solar energy trends from https://www.solarpowerworldonline.com"
  },
  {
    question: "What information should I include when contacting Nu Power Group?",
    answer : "When reaching out to us, please provide your name, contact details, and a brief description of your inquiry. For a solar installation, mention your location, energy requirements, and any specific preferences. This helps us respond more efficiently and tailor our recommendations to your needs."
  },
]

const ContactFAQs = () => {

  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <div className='mt-16'>
      <h2 className="text-xl md:text-2xl font-bold text-dark mb-5">Frequently Asked Questions</h2>

      <div>
      {contactFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray my-3 md:my-5  rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                className="w-full px-5 md:px-8 flex items-start gap-4 md:gap-5 md:text-xl cursor-pointer py-3 md:py-4"
              >
                <TfiAngleDown
                  className={`shrink-0 mt-2 md:mt-1 duration-300 ${
                    activeIndex === index ? "-rotate-180" : "rotate-0"
                  }`}
                />{" "}
                <span className="text-left">{faq.question}</span>
              </button>

              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
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
    </div>
  )
}

export default ContactFAQs
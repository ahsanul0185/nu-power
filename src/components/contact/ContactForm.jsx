import React, { useState } from "react";
import Spinner from "./Spinner";
import { AnimatePresence, motion } from "motion/react";

const ContactForm = () => {

    const [isSending, setIsSending] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    // YOUR W3FORMS ACCESS KEY HERE
    const accessKey = "b38893ae-6f88-4771-a9f9-531ab5a76ff9";
  
    // Handle form submission
    const onSubmit = async (event) => {
      event.preventDefault();
      setIsSending("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", accessKey);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.success) {
        setIsSending("");
        setSuccessMessage("Thank you for reaching out! We have received your message and will get back to you soon.");
        setTimeout(() => {
          setSuccessMessage("")
        }, [4000])
        event.target.reset();
      } else {
        console.log("Error", data);
      }
    };

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-3 md:gap-6">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray focus:border-primary outline-0"
        name="name"
        required
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray focus:border-primary outline-0"
        name="email"
        required
      />

      <input
        type="text"
        placeholder="Subject"
        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray focus:border-primary outline-0"
        name="subject"
        required
      />

      <textarea
        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray focus:border-primary outline-0 h-36 md:h-56"
        placeholder="Your Message"
        name="message"
        onChange={(e) => setMessage(e.target.value)}
        required
          ></textarea>
          
      <div className="flex gap-5 items-center justify-end flex-col lg:flex-row">

        <AnimatePresence>
        {successMessage && <motion.span initial={{opacity : 0}} animate={{opacity : 1}} exit={{opacity : 0}} transition={{duration : 0.6}} className={`border border-green-600 text-green-600 order-2 lg:order-1 px-4 text-sm py-3 text-left duration-300 `}>
          { successMessage}
        </motion.span>}
        </AnimatePresence>
          <button className="px-4 md:px-6 py-2.5 md:py-3 bg-primary text-sm md:text-base text-nowrap text-white font-bold hover:bg-dark duration-300 cursor-pointer w-fit">
          {!isSending ? "Send a Message" : <span className="flex gap-3"><Spinner /> Sending</span>}
          </button>
          </div>
          
    </form>
  );
};

export default ContactForm;

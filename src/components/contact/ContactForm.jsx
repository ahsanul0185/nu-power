import React, { useState } from "react";
import Spinner from "./Spinner";
import { AnimatePresence, motion } from "motion/react";

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // YOUR W3FORMS ACCESS KEY HERE
  const accessKey = "ad3e4ae4-e082-432a-8dac-73e533bf8846";


  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true)

    const form = new FormData();
    form.append("access_key", accessKey); // Replace with your Web3Forms Access Key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject);
    form.append("message", formData.message);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const result = await res.json();
    if (result.success) {
      setSuccessMessage("Thank you for reaching out! We have received your message and will get back to you soon.");
      setIsSending(false)
      setTimeout(() => {
        setSuccessMessage("")
      }, [4000])
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setSuccessMessage("Failed to send message. Try again!");
    }

  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-3 md:gap-6">
      <input
        type="text"
        placeholder="Your Name"
        onChange={handleChange}
        value={formData.name}
        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray focus:border-primary outline-0"
        name="name"
        required
      />

      <input
        type="email"
        placeholder="Your Email"
        onChange={handleChange}
        value={formData.email}
        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray focus:border-primary outline-0"
        name="email"
        required
      />

      <input
        type="text"
        placeholder="Subject"
        onChange={handleChange}
        value={formData.subject}
        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray focus:border-primary outline-0"
        name="subject"
        required
      />

      <textarea
        className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray focus:border-primary outline-0 h-36 md:h-56"
        placeholder="Your Message"
        name="message"
        onChange={handleChange}
        value={formData.message}
        required
      ></textarea>

      <div className="flex gap-5 items-center justify-end flex-col lg:flex-row">
        <AnimatePresence>
          {successMessage && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className={`border border-green-600 text-green-600 order-2 lg:order-1 px-4 text-sm py-3 text-left duration-300 `}
            >
              {successMessage}
            </motion.span>
          )}
        </AnimatePresence>
        <button className="px-4 md:px-6 py-2.5 md:py-3 bg-primary text-sm md:text-base text-nowrap text-white font-bold hover:bg-dark duration-300 cursor-pointer w-fit order-1 lg:order-2">
          {!isSending ? (
            "Send a Message"
          ) : (
            <span className="flex gap-3">
              <Spinner /> Sending
            </span>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

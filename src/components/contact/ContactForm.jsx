import React, { useState } from "react";

const ContactForm = () => {

    const [isSending, setIsSending] = useState("");

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
          
          <div className="text-right">
          <button className="px-4 md:px-6 py-2.5 md:py-3 bg-primary text-sm md:text-base text-white font-bold hover:bg-dark duration-300 cursor-pointer w-fit">
          {!isSending ? "Send a Message" : "Sending"}
          </button>
          </div>
          
    </form>
  );
};

export default ContactForm;

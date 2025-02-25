import React from "react";
import img_contact from "../assets/img_contact.avif";
import Title from "../components/home/Title";
import { Link } from "react-router-dom";
import ContactForm from "../components/contact/ContactForm";
import { FaPhoneVolume, FaRegEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="mt-[3.8rem] pb-10 md:pb-0">
      {/* Map */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55554.2920123545!2d31.20506517880845!3d-29.512183430801887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7151c7af7ff6f%3A0x38935657d5f4e7e6!2sBallito%2C%20South%20Africa!5e0!3m2!1sen!2sbd!4v1740515569780!5m2!1sen!2sbd"
          width="100%"
          height="280"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="section-padding mt-16">
        <div className="flex gap-12">
          <div className="flex flex-col gap-4 w-1/2">
            <img className="mb-3" src={img_contact} alt="" />
            <Title title="Get in touch" />
            <h2 className="text-xl md:text-2xl font-bold">
              Get in Touch - We're Here to Help
            </h2>
            <p>
              Need expert solar solutions? Contact Nu Power Group today for
              personalized assistance.
            </p>
            <p>
              At Nu Power Group, we are committed to delivering reliable,
              affordable, and high-quality solar energy solutions. Whether you
              need a consultation, technical support, or have a general inquiry,
              our team is ready to assist you.
              </p><p>
              Switching to solar is a significant investment. Therefore, we are
              here to guide you every step of the way. If you’re a homeowner
              considering solar installation, a business exploring energy
              savings, or a company interested in off-grid solutions, we can
              provide expert recommendations tailored to your needs.
            </p>

            <ul className="font-semibold list-disc pl-5">
              <li>No Obligation, Free Consultation</li>
              <li>Customized Solar & Backup Solutions</li>
              <li>Expert Advice & Transparent Pricing</li>
            </ul>
         
            <p>Learn more about our <Link to="/our-services" className="text-primary font-semibold hover:text-dark duration-200">solar energy services</Link> before reaching out</p>
            <p>📅 <b>Schedule your free quote today!</b> Contact us now to get started.</p>
          </div>

          <div className="w-1/2">
            <ContactForm />
            <div className="mt-10">
              <h2 className="text-xl md:text-2xl font-bold text-dark mb-2">📞 How to Contact Nu Power Group</h2>
              <p>Nu Power Group offer multiple ways to reach us for your convenience:</p>

              <ul className="mt-5 flex flex-col gap-5">
                <li className="flex items-center gap-6">
                  <span className="bg-darkGray text-white size-12 rounded-full grid place-items-center text-2xl"><FaPhoneVolume /></span> <span className="font-bold text-dark text-xl">+27 795255191</span>
                </li>
                <li className="flex items-center gap-6">
                  <span className="bg-darkGray text-white size-12 rounded-full grid place-items-center text-2xl"><FaRegEnvelope /></span> <span className="font-bold text-dark text-xl">ben@nupowergroup.co.za</span>
                </li>
                <li className="flex items-center gap-6">
                  <span className="bg-darkGray text-white size-12 rounded-full grid place-items-center text-2xl"><FaLocationDot /></span> <span className="font-bold text-dark text-xl">Ballito, KZN</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

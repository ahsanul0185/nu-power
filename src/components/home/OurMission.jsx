import React from 'react'
import img_solar from "../../assets/solar.jpg";

const OurMission = () => {
  return (
    <div className="mt-12 flex flex-col md:flex-row gap-12 items-start">
          <img className="md:w-1/2 aspect-4/2 md:aspect-4/3" src={img_solar} alt="" />
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold mb-2">🌍 Our Mission</h2>
            <p className="text-darkGray leading-7">
              At <b>Nu Power Group</b>, our mission is to{" "}
              <b>empower businesses and communities</b> with{" "}
              <b>
                sustainable, reliable, and cost-effective solar energy
                solutions.
              </b>{" "}
              We are committed to{" "}
              <b>
                reducing energy costs, enhancing energy security, and driving
                Africa's transition to clean power
              </b>
              through
              <b>
                innovative technology, superior engineering, and exceptional
                service.
              </b>
            </p>

            <p className="text-sm text-darkGray my-3">We aim to :</p>

            <ul className="text-darkGray list-disc pl-4 flex flex-col gap-2">
              <li>
                <b>Deliver high-quality, turnkey solar solutions</b> tailored to
                our client's needs.
              </li>
              <li>
                <b>Promote energy independence</b> through advanced solar and
                storage technology.
              </li>
              <li>
                <b>Support businesses & industries</b> in optimizing power
                efficiency and sustainability.
              </li>
              <li>
                <b>Reduce carbon footprints</b> while maximizing return on
                investment.
              </li>
            </ul>
          </div>
        </div>
  )
}

export default OurMission